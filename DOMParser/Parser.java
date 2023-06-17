package DOMParser;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import server.rmi_client.Student;

public class Parser {

  public static void main(String[] args) {
    try {
      DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
      DocumentBuilder builder = factory.newDocumentBuilder();
      Document doc = builder.parse("D:\\IT106_ACTIVITY\\student.xml");
      doc.getDocumentElement().normalize();
      System.out.println(
        "Root element: " + doc.getDocumentElement().getNodeName()
      );
      NodeList nList = doc.getElementsByTagName("student");
      System.out.println("----------------------------");
      for (int i = 0; i < nList.getLength(); i++) {
        Node nNode = nList.item(i);
        System.out.println("\nCurrent Element: " + nNode.getNodeName());
        if (nNode.getNodeType() == Node.ELEMENT_NODE) {
          Element eElement = (Element) nNode;
          System.out.println(
            "Student roll no : " + eElement.getAttribute("id")
          );
          System.out.println(
            "Program ID: " +
            eElement.getElementsByTagName("programid").item(0).getTextContent()
          );
          System.out.println(
            "Name: " +
            eElement.getElementsByTagName("name").item(0).getTextContent()
          );
          System.out.println(
            "Age: " +
            eElement.getElementsByTagName("age").item(0).getTextContent()
          );
          System.out.println(
            "Address: " +
            eElement.getElementsByTagName("address").item(0).getTextContent()
          );
          System.out.println(
            "Contact Number: " +
            eElement
              .getElementsByTagName("contactnumber")
              .item(0)
              .getTextContent()
          );

          String id = eElement.getAttribute("id");
          String programid = eElement
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

          String contact_number = eElement
            .getElementsByTagName("contactnumber")
            .item(0)
            .getTextContent();

          new Student(id, programid, name, age, address, contact_number);

          System.out.println("-----------------------");
          System.out.println("\n");
        }
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
