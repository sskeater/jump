package com.feibai.baoying.jump.utils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public final class SensitiveWrodsUtils {

    private static final File file = new File(SensitiveWrodsUtils.class.getResource("/").getPath() + "/sensitive.word");

    static Logger logger = LoggerFactory.getLogger(SensitiveWrodsUtils.class);

    private static long lastModifiedTime = 0l;

    private static String sensitiveWrod = "";

    private static Map<String, Object> sensitiveWordMap = null;

    /**
     * 更新检查，如有更新，则重新初始化敏感词库.
     */
    private static void checkReload() {
        if (file.lastModified() <= lastModifiedTime && sensitiveWordMap != null) {
            return;
        }
        logger.info("init sensitive words, file={}", file.getPath());
        Set<String> wordSet = new HashSet<String>();
        synchronized (SensitiveWrodsUtils.class) {
            BufferedReader br = null;
            try {
                lastModifiedTime = file.lastModified();
                br = new BufferedReader(new FileReader(file));
                String line = null;
                while ((line = br.readLine()) != null) {
                    if (StringUtils.isNotBlank(line)) {
                        wordSet.add(line.toLowerCase());
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                if (null != br) {
                    try {
                        br.close();
                    } catch (Exception e2) {
                    }
                }
            }
            initSensitiveRepository(wordSet);
        }
    }

    /**
     * 初始化敏感词库.
     * 
     * @param wordSet
     */
    @SuppressWarnings({ "unchecked", "rawtypes" })
    private static void initSensitiveRepository(Set<String> wordSet) {
        if (null == wordSet || wordSet.isEmpty()) {
            return;
        }
        sensitiveWordMap = new HashMap<String, Object>(wordSet.size());
        Map tempMap = null;
        Map<String, String> newMap = null;
        for (String word : wordSet) {
            tempMap = sensitiveWordMap;
            for (int i = 0; i < word.length(); i++) {
                char w = word.charAt(i);
                if (StringUtils.isBlank(String.valueOf(w))) {
                    continue;
                }
                Object wordMap = tempMap.get(w);
                if (null != wordMap) {
                    tempMap = (Map) wordMap;
                } else {
                    newMap = new HashMap<String, String>();
                    newMap.put("isEnd", "0");
                    tempMap.put(w, newMap);
                    tempMap = newMap;
                }
                if (i == word.length() - 1) {
                    tempMap.put("isEnd", "1");
                }
            }
        }
    }

    public static boolean isSensitive(String text) {
        if (StringUtils.isBlank(text)) {
            return false;
        }
        checkReload();
        for (int i = 0; i < text.length(); i++) {
            if (checkSensitiveWord(text, i)) {
                return true;
            }
        }
        return false;
    }

    @SuppressWarnings("rawtypes")
    private static boolean checkSensitiveWord(String text, int beginIndex) {
        sensitiveWrod = "";
        char word = 0;
        Map nowMap = sensitiveWordMap;
        for (int i = beginIndex; i < text.length(); i++) {
            word = text.charAt(i);
            if (StringUtils.isBlank(String.valueOf(word))) {
                continue;
            }
            sensitiveWrod += word;
            nowMap = (Map) nowMap.get(word);
            if (null == nowMap) {
                break;
            }
            if ("1".equals(nowMap.get("isEnd"))) {
                return true;
            }
        }
        return false;
    }

    public static String getSensitiveWrod() {
        return sensitiveWrod;
    }

    public static void main(String[] args) {

        System.out.println(SensitiveWrodsUtils.isSensitive("Amy的房间"));
    }
}
