package com.feibai.baoying.jump.support;

public enum PkResult {

    WIN,

    EQUAL,

    LOSE;

    public static PkResult valueOfC(int c) {
        return c == 0 ? EQUAL : c > 0 ? WIN : LOSE;
    }

}
