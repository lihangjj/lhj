package lhjj.vo;

import java.io.Serializable;

public class Admin implements Serializable {
    public String getAdminid() {
        return adminid;
    }

    public void setAdminid(String adminid) {
        this.adminid = adminid;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    private String adminid, password;
}
