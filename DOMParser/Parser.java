package DOMParser;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class Parser {

  public static void main(String[] args) {
    String url = "jdbc:mysql://localhost:3306/ite106_final_proj";
    String username = "root";
    String password = "";

    try {
      Class.forName("com.mysql.cj.jdbc.Driver");

      Connection connection = DriverManager.getConnection(
        url,
        username,
        password
      );

      DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
      DocumentBuilder builder = factory.newDocumentBuilder();
      Document doc = builder.parse("D:\\IT106_ACTIVITY\\student.xml");
      doc.getDocumentElement().normalize();
      System.out.println(
        "Root element: " + doc.getDocumentElement().getNodeName()
      );
      NodeList nList = doc.getElementsByTagName("student");

      String insertQuery =
        "INSERT INTO tbl_students (student_id, program, name, age, address, contact_number) VALUES (?, ?, ?, ?, ?, ?)";
      PreparedStatement preparedStatement = connection.prepareStatement(
        insertQuery
      );

      connection.createStatement();

      System.out.println("----------------------------");
      for (int i = 0; i < nList.getLength(); i++) {
        Node nNode = nList.item(i);
        System.out.println("\nCurrent Element: " + nNode.getNodeName());
        if (nNode.getNodeType() == Node.ELEMENT_NODE) {
          Element eElement = (Element) nNode;

          String id = eElement.getAttribute("id");
          String programId = eElement
            .getElementsByTagName("programid")
            .item(0)
            .getTextContent();

          String name = eElement
            .getElementsByTagName("name")
            .item(0)
            .getTextContent();

          String age = eElement
            .getElementsByTagName("age")
            .item(0)
            .getTextContent();

          String address = eElement
            .getElementsByTagName("address")
            .item(0)
            .getTextContent();

          String contactNumber = eElement
            .getElementsByTagName("contactnumber")
            .item(0)
            .getTextContent();

          preparedStatement.setString(1, id);
          preparedStatement.setString(2, programId);
          preparedStatement.setString(3, name);
          preparedStatement.setString(4, age);
          preparedStatement.setString(5, address);
          preparedStatement.setString(6, contactNumber);

          int rowsAffected = preparedStatement.executeUpdate();

          if (rowsAffected > 0) {
            System.out.println("Data inserted successfully.");
          } else {
            System.out.println("Data insertion failed.");
          }
        }
      }
      System.exit(0);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
