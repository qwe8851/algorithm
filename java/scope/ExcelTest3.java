package scope;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

public class ExcelTest3 {

    public ExcelTest3() {
    }

    public List[] readExcel(String file) {
        List[] result = new ArrayList[4];

        List<String> resultKr = new ArrayList<String>();
        List<String> resultEn = new ArrayList<String>();
        List<String> resultJp = new ArrayList<String>();
        List<String> resultCh = new ArrayList<String>();

        result[0] = resultKr;
        result[1] = resultEn;
        result[2] = resultJp;
        result[3] = resultCh;

        String kr = "";
        String en = "";
        String jp = "";
        String ch = "";

        Row row = null;

        Cell cellKey = null;
        Cell cellKr = null;
        Cell cellEn = null;
        Cell cellJp = null;
        Cell cellCh = null;

        try {
            Workbook workbook = WorkbookFactory.create(new File(file));

            Sheet sheet = workbook.getSheetAt(1); // 엑셀파일의 n번째 시트
            int rows = sheet.getPhysicalNumberOfRows();

            for (int r = 2; r < rows; r++) {
                row = sheet.getRow(r); // 행 가져오기

                if (row != null) {
                    cellKey = row.getCell(1);

                    cellKr = row.getCell(2);
                    cellEn = row.getCell(3);
                    cellJp = row.getCell(4);
                    cellCh = row.getCell(5);

                    String key = cellKey.getStringCellValue();

                    if (null == key || "".equals(key)) {
                        break;
                    }

                    kr = cellKr.getStringCellValue();
                    en = cellEn.getStringCellValue();
                    jp = cellJp.getStringCellValue();
                    ch = cellCh.getStringCellValue();

                    resultKr.add(key + "=" + kr + "\n");
                    resultEn.add(key + "=" + en + "\n");
                    resultJp.add(key + "=" + jp + "\n");
                    resultCh.add(key + "=" + ch + "\n");
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    // 파일 쓰기
    public void writeFile(List[] str) throws IOException {
        BufferedWriter out = null;
        List<String> list = new ArrayList<>(Arrays.asList("kr", "en", "jp", "ch"));

        try {
            for (int i = 0; i < list.size(); i++) {
                out = new BufferedWriter(new FileWriter("C:\\Users\\se\\Downloads\\" + list.get(i) + ".txt")); // 변환된
                                                                                                               // 파일이
                                                                                                               // 쓰여질 장소
                String result;
                for (int j = 0; j < str[i].size(); j++) {
                    result = (String) str[i].get(j);
                    out.write(result);
                }
                out.close();
                out = null;
            }
        } catch (Exception e) {

        } finally {
            if (null != out) {
                out.close();
            }
        }
    }

    public static void main(String[] args) {
        try {

            ExcelTest excelTest = new ExcelTest();
            List[] list = excelTest.readExcel("C:\\Users\\se\\Downloads\\IPScan NAC Cloud Language Resource.xlsx");
            excelTest.writeFile(list);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
