package scope;

import java.io.File;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class readExcel {
public List[] readExcel(File file) {

List[] result = new ArrayList[4];

ArrayList<String> resultKr = new ArrayList<String>();
ArrayList<String> resultEn = new ArrayList<String>();
ArrayList<String> resultJp = new ArrayList<String>();
ArrayList<String> resultCh = new ArrayList<String>();

try {
Workbook wb = WorkbookFactory.create(file);

Sheet sheet = wb.getSheet("Language Resource");
int rows = sheet.getPhysicalNumberOfRows(); // row갯수

for (int r = 2; r < rows; r++) {

String cellKey = sheet.getRow(r).getCell(1).getStringCellValue();
String cellKr = sheet.getRow(r).getCell(2).getStringCellValue();
String cellEn = sheet.getRow(r).getCell(3).getStringCellValue();
String cellJp = sheet.getRow(r).getCell(4).getStringCellValue();
String cellCh = sheet.getRow(r).getCell(5).getStringCellValue();


if(cellKey==null || "".equals(cellKey)) {
break;
} else {
resultKr.add(cellKey+"="+cellKr);
resultEn.add(cellKey+"="+cellEn);
resultJp.add(cellKey+"="+cellJp);
resultCh.add(cellKey+"="+cellCh);
}
}
wb.close();

} catch (Exception e) {
// e.printStackTrace();
System.err.println(e);
}
result[0] = resultKr;
result[1] = resultEn;
result[2] = resultJp;
result[3] = resultCh;

return result;

}

public void writeFile(List[] read) {

List<String> fileName = Arrays.asList("kr", "en", "jp", "ch");

try {
for (int i = 0; i < fileName.size(); i++) {
FileWriter fileWriter = new
FileWriter("C:\\Users\\se\\Downloads\\newFile\\"+fileName.get(i)+".txt");

String str = String.join("\n", read[i]);

fileWriter.write(str.toString());


fileWriter.close();
}


} catch (Exception e) {
e.printStackTrace();
}

}
}