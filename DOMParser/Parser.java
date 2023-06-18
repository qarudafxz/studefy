package DOMParser;

import java.util.ArrayList;
import java.util.List;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import server.rmi_server.StudentImpl;

public class Parser {

  public static void main(String[] args) {
    List<StudentImpl> studentList = new ArrayList<>();

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

          StudentImpl s1 = new StudentImpl(
            id,
            programid,
            name,
            age,
            address,
            contact_number
          );

          s1.displayInfo();
          studentList.add(s1);

          System.out.println("-----------------------");
          System.out.println("\n");
        }
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
