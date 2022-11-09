package backend.domain;

import backend.global.dto.SingleResDto;
import backend.global.exception.dto.BusinessLoginException;
import backend.global.exception.exceptionCode.ExceptionCode;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/test")
@RestController
public class test {
    // 테스트용 컨트롤러입니다. 다음 PR시 제거하겠습니다.
    @PostMapping("/1")
    public ResponseEntity <SingleResDto<String>> postTest1 () {
        return new ResponseEntity<>(new SingleResDto<>("success"), HttpStatus.CREATED);
    }

    @PostMapping("/2")
    public ResponseEntity <String> postTest2 () {
        throw new BusinessLoginException(ExceptionCode.LOGIN_FAILURE);
    }

}
