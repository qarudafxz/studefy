package server.rmi_client;

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface Student extends Remote {
  public String getStudentID() throws RemoteException;

  public String getProgramID() throws RemoteException;

  public String getName() throws RemoteException;

  public String getAge() throws RemoteException;
}
