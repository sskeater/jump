package com.feibai.baoying.jump.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

public abstract class AbstractModel {

    private int id;
    private int premierId;
    @JsonIgnore
    private String optaId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @JsonIgnore
    public int getPremierId() {
        return premierId;
    }

    public void setPremierId(int premierId) {
        this.premierId = premierId;
    }

    @JsonIgnore
    public String getOptaId() {
        return optaId;
    }

    public void setOptaId(String optaId) {
        this.optaId = optaId;
    }

}
