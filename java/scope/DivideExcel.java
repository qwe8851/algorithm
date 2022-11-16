package scope;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

//import org.apache.poi.ss.usermodel.CellType;
//import org.apache.poi.xssf.usermodel.XSSFRow;
//import org.apache.poi.xssf.usermodel.XSSFSheet;
//import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class DivideExcel {

    // 읽기
    private List[] readExcel() {

        List[] result = new ArrayList[4];

        try {
            File file = new File("C:\\Users\\se\\Downloads\\IPScan NAC Cloud Language Resource.xlsx");
            Workbook wb = WorkbookFactory.create(file);
            Sheet sheet = wb.getSheet("Language Resource");

            ArrayList<String> Key = new ArrayList<String>();
            ArrayList<String> valueKr = new ArrayList<String>();
            ArrayList<String> valueEn = new ArrayList<String>();
            ArrayList<String> valueJp = new ArrayList<String>();
            ArrayList<String> valueCh = new ArrayList<String>();

            // 행 루프
            int rows = sheet.getPhysicalNumberOfRows();
            for (int r = 2; r < rows; r++) {
                Row row = sheet.getRow(r);

                Cell cellKey = row.getCell(1);
                Cell cellKr = row.getCell(2);
                Cell cellEn = row.getCell(3);
                Cell cellJp = row.getCell(4);
                Cell cellCh = row.getCell(5);

                if (cellKey == null || "".equals(cellKey)) {
                    break;
                } else {
                    System.out.println(cellKey);
                }

                //
                // Key = cellKey.getStringCellValue();
                // cellKey.getStringCellValue();
                // valueKr = cellKr.getStringCellValue();
                // valueEn = cellEn.getStringCellValue();
                // valueJp = cellJp.getStringCellValue();
                // valueCh = cellCh.getStringCellValue();
                //
                // Key = cellKey.getStringCellValue();
                // if(cellKey !=null && !"".equals(cellKey)) {
                // System.out.println(cellKey.getStringCellValue());
                // result[0].add(cellKey+"="+valueKr);
                // result[1].add(cellKey+"="+valueEn);
                // result[2].add(cellKey+"="+valueJp);
                // result[3].add(cellKey+"="+valueCh);

                // }
                // else {
                // break;
                // }
            }

            wb.close();
        } catch (Exception e) {
            // TODO: handle exception
        }

        return result;

    }

    // 쓰기
    public void writeFile(List<String>[] read) {
        try {

        } catch (Exception e) {
            // TODO: handle exception
        }

    }

    public static void main(String[] args) {

        try {
            DivideExcel divideExcel = new DivideExcel();

            List[] read = divideExcel.readExcel();
            divideExcel.writeFile(read);

        } catch (Exception e) {
            // TODO: handle exception
        }
    }

}

//
//
//
//
// package com.scope.xe.dialog;
//
// import java.io.BufferedReader;
// import java.io.BufferedWriter;
// import java.io.File;
// import java.io.FileNotFoundException;
// import java.io.FileOutputStream;
// import java.io.FileReader;
// import java.io.FileWriter;
// import java.io.IOException;
// import java.util.ArrayList;
// import java.util.List;
// import org.apache.poi.xssf.streaming.SXSSFCell;
// import org.apache.poi.xssf.streaming.SXSSFRow;
// import org.apache.poi.xssf.streaming.SXSSFSheet;
// import org.apache.poi.xssf.streaming.SXSSFWorkbook;
//
// import com.scope.ipscannac.common.CmnValue;
// import com.scope.ipscannac.common.util.StringUtil;
// import com.scope.nac2017.vo.exp_probe_range;
//
// import org.apache.poi.util.SystemOutLogger;
//
// public class ExcelTest {
//
// public static void main(String[] args) {
//
// try{
// File file = new File("C:\\Users\\se\\Downloads\\sample.txt");
////
//// // 쓰기
// BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(file,
// true));
////
//// if(file.isFile() && file.canWrite()){
//// bufferedWriter.write("문자열 추가1\n");
//// bufferedWriter.write("문자열 추가2\n");
////
//// System.out.println();
//// bufferedWriter.close();
//// }
////
//// // 읽기
//// FileReader filereader = new FileReader(file);
//// BufferedReader bufferedReader = new BufferedReader(filereader);
//// System.out.println(bufferedReader);
//// String line = "";
////
//// while((line = bufferedReader.readLine()) != null){
//// System.out.println(line);
//// }
//// bufferedReader.close();
//
//
//
// try {
//
//
// File xlsxFile = new File("C:\\Users\\se\\Downloads\\sampleExcel.xlsx");
// sendMessage(xlsxFile.getPath());
//
// fileWriter = new FileOutputStream(xlsxFile);
//
// workbook = new SXSSFWorkbook();
// SXSSFSheet sheet = null;
// SXSSFRow row = null;
// SXSSFCell cell = null;
//
// int rowNum = 0;
// sheet = workbook.createSheet();
// row = sheet.createRow(rowNum++);
//
// // 관리대역 헤더
// for(int i=0; i<RNG_HEADER.length; i++) {
// cell = row.createCell(i);
// cell.setCellValue((String)mLang.get(RNG_HEADER[i]));
// }
//
// // 관리대역 데이터
// for(int i=0; i<rngList.size(); i++) {
// row = sheet.createRow(rowNum++);
// rangeCell.add(String.format("a%d", rowNum));
//
// exp_probe_range rng = rngList.get(i);
// for(int j=0; j<RNG_HEADER.length; j++) {
// cell = row.createCell(j);
// if("범위구분".equals(RNG_HEADER[j])) {
// cell.setCellValue(StringUtil.nvl((String)mLang.get("관리대역")));
// }else if("이름".equals(RNG_HEADER[j])) {
// cell.setCellValue(StringUtil.nvl(rng.getIprng_nm()));
// }else if("Probe IP".equals(RNG_HEADER[j])) {
// cell.setCellValue(StringUtil.nvl(rng.getPrb_virtual_ip()));
// }else if("Vlan ID".equals(RNG_HEADER[j])) {
// cell.setCellValue(StringUtil.nvl(rng.getVlan_id()));
// }else if("관리대역 동작 설정".equals(RNG_HEADER[j])) {
//
// }
// }catch (Exception e) {
// // TODO: handle exception
// }
//
//
//
//
// } catch(IOException e){
// System.out.println(e);
// }
//
//
//
//
//
//
//
//
//
//
//
// }
//
// public void sendMessage(String message) {
// logger.info(message);
// if(null != this.cb) cb.onMessage(message);
// }
//
//
//
// }
//
//