package lhjj.service;

import lhjj.vo.Admin;

public interface IAdminFrontService {
    boolean insert(Admin vo) throws Exception;
    boolean findById(String id) throws Exception;

}
