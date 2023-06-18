package server.rmi_server;

interface RunServer {
  void startServer();
}

class RunHost implements RunServer {

  @Override
  public void startServer() {
    System.setProperty("java.rmi.server.hostname", "127.0.0.1");
    System.out.println("Server has been started...");
  }
}
