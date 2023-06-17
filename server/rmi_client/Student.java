package server.rmi_client;

public class Student {
  protected String id;
  protected String programid;
  protected String name;
  protected String age;
  protected String address;
  protected String contact_number;

  public Student(
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
    System.out.println("Student ID Number: " + id);
    System.out.println("Program ID: " + programid);
    System.out.println("Name: " + name);
    System.out.println("Age: " + age);
    System.out.println("Address: " + address);
    System.out.println("Contact Number: " + contact_number);
  }
}
