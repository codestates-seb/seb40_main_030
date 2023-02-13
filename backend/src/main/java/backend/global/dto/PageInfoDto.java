package backend.global.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageInfoDto<T> {

    private List<T> content;  // 감싸는 리스트 이름

    private int size;

    private int totalPages;

    private long totalElements;

    private boolean first;  // 첫 페이지인지

    private boolean last;   // 마지막 페이지인지

    private boolean sorted; // 정렬 조건이 있는지

    private int pageNumber;

    private int numberOfElements;


    public PageInfoDto(Page<T> page) {
        content = page.getContent();  // 조회할 데이터
        totalPages = page.getTotalPages(); // 총 페이지수
        totalElements = page.getTotalElements(); // DB에 있는 총 데이터수
        first = page.isFirst(); //
        last = page.isLast();
        sorted = page.getSort().isSorted();
        size = page.getSize();
        pageNumber = page.getNumber() + 1;
        numberOfElements = page.getNumberOfElements();
    }

}