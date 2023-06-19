package server;

import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.server.UnicastRemoteObject;

public class RMIServer extends UnicastRemoteObject implements RMIInterface {

  public RMIServer() throws RemoteException {
    // Constructor required for UnicastRemoteObject
  }

  public void displayInfo() throws RemoteException {
    System.out.println("Hello world");
  }

  public static void main(String[] args) {
    try {
      RMIServer server = new RMIServer();
      RMIInterface stub = (RMIInterface) server;

      Registry registry = LocateRegistry.createRegistry(1099);
      registry.rebind("RMIInterface", stub);

      System.out.println("Server is ready.");
    } catch (RemoteException e) {
      System.err.println("Error: " + e.getMessage());
      e.printStackTrace();
    }
  }
}
