package lhjj.servlet;

import lhjj.factory.ServiceFrontFactory;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "AdminServlet", urlPatterns = "/AdminServlet/*")
public class AdminServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html");
        String status = request.getRequestURI().substring(request.getRequestURI().lastIndexOf("/") + 1);
        PrintWriter writer = response.getWriter();
        switch (status) {
            case "admin":
                String adminid = request.getParameter("msg");
                try {
                    if (ServiceFrontFactory.getAdminServiceFrontImpl().findById(adminid)) {
                        writer.println("该用户已经存在，请更换用户名");
                    } else {
                        writer.println("该用户名可以使用");
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
                break;
            case "code":
                String code = request.getParameter("msg");
                if (((String) (request.getSession().getAttribute("rand"))).equalsIgnoreCase(code)) {
                    writer.println("验证码正确");
                } else {
                    writer.println("验证码错误");
                }
                break;

        }


    }
}
