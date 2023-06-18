package server.rmi_server;

public class Server {

  public static void main(String[] args) {
    try {
      RunHost rs = new RunHost();
      rs.startServer();
    } catch (Exception e) {
      System.out.println(e);
    }
  }
}
