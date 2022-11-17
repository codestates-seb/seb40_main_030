package backend.domain.cart.controller;

import backend.domain.battery.entity.Battery;
import backend.domain.cart.dto.CartPatchReqDto;
import backend.domain.cart.dto.CartPostReqDto;
import backend.domain.cart.entity.Cart;
import backend.domain.cart.repository.CartRepository;
import backend.domain.member.entity.Member;
import com.google.gson.Gson;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static backend.util.ApiDocumentUtils.getRequestPreProcessor;
import static backend.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureRestDocs
public class CartControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @Autowired
    private CartRepository orderRepository;


    @Test @DisplayName("Cart 생성")
    void postCart_Test() throws Exception {
        // given
        CartPostReqDto cartPostReqDto = new CartPostReqDto();
        cartPostReqDto.setStartTime("2022-12-18T09");
        cartPostReqDto.setEndTime("2022-12-20T09");

        String body = gson.toJson(cartPostReqDto);

        // when
        ResultActions actions = mockMvc.perform(
                post("/carts")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(body)
        );

        // then
        actions
                .andExpect(status().isCreated())
                .andDo(document("postCart",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("startTime").type(JsonFieldType.STRING).description("Cart 시작일자"),
                                        fieldWithPath("endTime").type(JsonFieldType.STRING).description("Cart 종료일자")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("cartId").type(JsonFieldType.NUMBER).description("Cart 식별자"),
                                        fieldWithPath("startTime").type(JsonFieldType.STRING).description("Cart 시작일자"),
                                        fieldWithPath("endTime").type(JsonFieldType.STRING).description("Cart 종료일자"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("Cart 생성일자"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("Cart 수정일자")
                                )
                        )
                ));
    }


    @Test @DisplayName("Cart 수정")
    void patchCart_Test() throws Exception {
        // given
        Long cartId = 1L;
        List<Battery> list = new ArrayList<>();
        Cart cart = new Cart(cartId, "2022-11-18T09", "2022-11-18T09", list, new Member());
        cart.setCreatedAt(LocalDateTime.now());
        cart.setModifiedAt(LocalDateTime.now());
        orderRepository.save(cart);

        CartPatchReqDto cartPatchReqDto = new CartPatchReqDto();
        cartPatchReqDto.setCartId(cartId);
        cartPatchReqDto.setStartTime("2022-12-18T09");
        cartPatchReqDto.setEndTime("2022-12-20T09");

        String body = gson.toJson(cartPatchReqDto);

        // when
        ResultActions actions = mockMvc.perform(
                patch("/carts/{cartId}", cartId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(body)
        );

        // then
        actions
                .andExpect(status().isOk())
                .andDo(document("patchCart",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("cartId").description("Cart 식별자")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("cartId").type(JsonFieldType.NUMBER).description("Cart 식별자"),
                                        fieldWithPath("status").type(JsonFieldType.STRING).description("Cart 상태"),
                                        fieldWithPath("startTime").type(JsonFieldType.STRING).description("Cart 시작일자"),
                                        fieldWithPath("endTime").type(JsonFieldType.STRING).description("Cart 종료일자")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("cartId").type(JsonFieldType.NUMBER).description("Cart 식별자"),
                                        fieldWithPath("startTime").type(JsonFieldType.STRING).description("Cart 시작일자"),
                                        fieldWithPath("endTime").type(JsonFieldType.STRING).description("Cart 종료일자"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("Cart 생성일자"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("Cart 수정일자")
                                )

                        )
                ));
    }


    @Test @DisplayName("Cart 삭제")
    void deleteCart_Test () throws Exception {
        // given
        Long cartId = 101L;

        //when
        ResultActions actions = mockMvc.perform(
                delete("/carts/{cartId}", cartId)
        );

        //then
        actions
                .andExpect(status().isOk())
                .andDo(document("deleteCart",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("cartId").description("Cart 식별자")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath("data").type(JsonFieldType.STRING).description("Api 성공 메시지")
                                )
                        )
                ));
    }


    @Test @DisplayName("Cart 조회")
    void getCart_Test () throws Exception {
        // given
        Long cartId = 103L;

        // when
        ResultActions actions = mockMvc.perform(
                get("/carts/{cartId}", cartId)
        );

        // then
        actions
                .andExpect(status().isOk())
                .andDo(document("getCart",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("cartId").description("Cart 식별자")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath("cartId").type(JsonFieldType.NUMBER).description("Cart 식별자"),
                                        fieldWithPath("startTime").type(JsonFieldType.STRING).description("Cart 시작일자"),
                                        fieldWithPath("endTime").type(JsonFieldType.STRING).description("Cart 종료일자"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("Cart 생성일자"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("Cart 수정일자")
                                )
                        )
                        ));
    }


    @Test @DisplayName("Cart 전체 조회")
    void getCarts_Test() throws Exception {
        // given

        // when
        ResultActions actions = mockMvc.perform(
                get("/carts")
                        .param("page","1")
                        .param("size","10")
                        .param("sort","createdAt,desc")
        );

        // then
        actions
                .andExpect(status().isOk())
                .andDo(document("getCarts",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestParameters(
                                parameterWithName("page").description("페이지 번호(default = 1)"),
                                parameterWithName("size").description("페이지 사이즈(default = 10)"),
                                parameterWithName("sort").description("페이지 정렬(default = createdAt, desc)")
                        ),
                        responseFields(
                                Arrays.asList(
                                        fieldWithPath("content").type(JsonFieldType.ARRAY).description("Cart 페이지"),
                                        fieldWithPath("content[].id").type(JsonFieldType.NUMBER).description("Cart 식별자"),
                                        fieldWithPath("content[].startTime").type(JsonFieldType.STRING).description("Cart 시작일자"),
                                        fieldWithPath("content[].endTime").type(JsonFieldType.STRING).description("Cart 종료일자"),
                                        fieldWithPath("content[].createdAt").type(JsonFieldType.STRING).description("Cart 생성일자"),
                                        fieldWithPath("content[].modifiedAt").type(JsonFieldType.STRING).description("Cart 수정일자"),

                                        fieldWithPath("size").type(JsonFieldType.NUMBER).description("Cart 페이지 사이즈"),
                                        fieldWithPath("totalPages").type(JsonFieldType.NUMBER).description("Cart 총 페이지 수"),
                                        fieldWithPath("totalElements").type(JsonFieldType.NUMBER).description("Cart 총 데이터 수"),
                                        fieldWithPath("first").type(JsonFieldType.BOOLEAN).description("Cart 첫 페이지 유무"),
                                        fieldWithPath("last").type(JsonFieldType.BOOLEAN).description("Cart 마지막 페이지 유무"),
                                        fieldWithPath("sorted").type(JsonFieldType.BOOLEAN).description("Cart 정렬 유무"),
                                        fieldWithPath("pageNumber").type(JsonFieldType.NUMBER).description("Cart 페이지 번호"),
                                        fieldWithPath("numberOfElements").type(JsonFieldType.NUMBER).description("Cart 페이지 내 데이터 수")
                                )
                        )
                ));
    }
}
