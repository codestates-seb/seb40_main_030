package backend.util;

import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import org.springframework.restdocs.operation.preprocess.OperationRequestPreprocessor;
import org.springframework.restdocs.operation.preprocess.OperationResponsePreprocessor;

public interface ApiDocumentUtils {

    static OperationRequestPreprocessor getRequestPreProcessor() { return preprocessRequest(prettyPrint());}

    static OperationResponsePreprocessor getResponsePreProcessor() { return preprocessResponse(prettyPrint());}

}
