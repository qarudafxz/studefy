package server.rmi_server;

public class StudentImpl {
  protected String id;
  protected String programid;
  protected String name;
  protected String age;
  protected String address;
  protected String contact_number;

  public StudentImpl(
    String id,
    String programid,
    String name,
    String age,
    String address,
    String contact_number
  ) {
    this.id = id;
    this.programid = programid;
    this.name = name;
    this.age = age;
    this.address = address;
    this.contact_number = contact_number;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getProgramid() {
    return programid;
  }

  public void setProgramid(String programid) {
    this.programid = programid;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getAge() {
    return age;
  }

  public void setAge(String age) {
    this.age = age;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public void setContactNumber(String contact_number) {
    this.contact_number = contact_number;
  }

  public String getContactNumber() {
    return contact_number;
  }

  public void displayInfo() {
    System.out.println(id);
    System.out.println(programid);
    System.out.println(name);
    System.out.println(age);
    System.out.println(address);
    System.out.println(contact_number);
  }
}
