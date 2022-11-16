package scope;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class ExcelTest {

    public static void main(String[] args) {

        try {
            // 파일 객체 생성
            File file = new File("C:\\Users\\se\\Downloads\\sample.txt");

            // 입력 스트림생성
            // 1.
            FileReader filereader = new FileReader(file);

            int singleCh = 0;
            while ((singleCh = filereader.read()) != -1) {
                System.out.print((char) singleCh);
            }
            filereader.close();

            // 2
            BufferedReader bufReader = new BufferedReader(filereader);
            String line = "";
            while ((line = bufReader.readLine()) != null) {
                System.out.println(line);
            }
            // .readLine()은 끝에 개행문자를 읽지 않는다.
            bufReader.close();

        } catch (FileNotFoundException e) {

        } catch (IOException e) {
            System.out.println(e);
        }
    }

}