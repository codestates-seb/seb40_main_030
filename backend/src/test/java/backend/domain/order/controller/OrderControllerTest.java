package backend.domain.order.controller;

import backend.domain.order.dto.OrderPatchReqDto;
import backend.domain.order.dto.OrderPostReqDto;
import backend.domain.order.entity.Order;
import backend.domain.order.entity.OrderState;
import backend.domain.order.repository.OrderRepository;
import com.google.gson.Gson;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import static backend.util.ApiDocumentUtils.getRequestPreProcessor;
import static backend.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureRestDocs
public class OrderControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @Autowired
    private OrderRepository orderRepository;

    @Test @DisplayName("Order 생성")
    void postOrder_Test() throws Exception {
        // given
        OrderPostReqDto orderPostReqDto = new OrderPostReqDto();
        orderPostReqDto.setStartTime("2022-12-18T09");
        orderPostReqDto.setEndTime("2022-12-20T09");

        String body = gson.toJson(orderPostReqDto);

        // when
        ResultActions actions = mockMvc.perform(
                post("/orders")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(body)
        );

        // then
        actions
                .andExpect(status().isCreated())
                .andDo(document("postOrder",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("startTime").type(JsonFieldType.STRING).description("Order 시작일자"),
                                        fieldWithPath("endTime").type(JsonFieldType.STRING).description("Order 종료일자")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("orderId").type(JsonFieldType.NUMBER).description("Order 식별자"),
                                        fieldWithPath("status").type(JsonFieldType.STRING).description("Order 상태"),
                                        fieldWithPath("startTime").type(JsonFieldType.STRING).description("Order 시작일자"),
                                        fieldWithPath("endTime").type(JsonFieldType.STRING).description("Order 종료일자"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("Answer 생성일자"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("Order 수정일자")
                                )
                        )
                ));
    }

    @Test @DisplayName("Order 수정")
    void patchOrder_Test() throws Exception {
        // given
        Long orderId = 1L;
        Order order = new Order(orderId, OrderState.IN_ORDERS, "2022-11-18T09", "2022-11-18T09");
        order.setCreatedAt(LocalDateTime.now());
        order.setModifiedAt(LocalDateTime.now());
        orderRepository.save(order);

        OrderPatchReqDto orderPatchReqDto = new OrderPatchReqDto();
        orderPatchReqDto.setOrderId(orderId);
        orderPatchReqDto.setStatus(OrderState.FINISHED);
        orderPatchReqDto.setStartTime("2022-12-18T09");
        orderPatchReqDto.setEndTime("2022-12-20T09");

        String body = gson.toJson(orderPatchReqDto);

        // when
        ResultActions actions = mockMvc.perform(
                patch("/orders/{orderId}", orderId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(body)
        );

        // then
        actions
                .andExpect(status().isOk())
                .andDo(document("patchOrder",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("orderId").description("Order 식별자")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("orderId").type(JsonFieldType.NUMBER).description("Order 식별자"),
                                        fieldWithPath("status").type(JsonFieldType.STRING).description("Order 상태"),
                                        fieldWithPath("startTime").type(JsonFieldType.STRING).description("Order 시작일자"),
                                        fieldWithPath("endTime").type(JsonFieldType.STRING).description("Order 종료일자")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("orderId").type(JsonFieldType.NUMBER).description("Order 식별자"),
                                        fieldWithPath("status").type(JsonFieldType.STRING).description("Order 상태"),
                                        fieldWithPath("startTime").type(JsonFieldType.STRING).description("Order 시작일자"),
                                        fieldWithPath("endTime").type(JsonFieldType.STRING).description("Order 종료일자"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("Answer 생성일자"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("Order 수정일자")
                                )

                        )
                ));
    }

    @Test @DisplayName("Order 삭제")
    void deleteOrder () throws Exception {
        // given
        Long orderId = 101L;

        //when
        ResultActions actions = mockMvc.perform(
                delete("/orders/{orderId}", orderId)
        );

        //then
        actions
                .andExpect(status().isOk())
                .andDo(document("deleteOrder",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("orderId").description("Order 식별자")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath("data").type(JsonFieldType.STRING).description("Api 성공 메시지")
                                )
                        )
                ));
    }
}
