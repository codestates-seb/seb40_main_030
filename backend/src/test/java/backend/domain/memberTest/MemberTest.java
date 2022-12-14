package backend.domain.memberTest;
//
//import backend.domain.member.dto.MemberDto;
//import backend.domain.member.entity.Member;
//import backend.domain.member.repository.MemberRepository;
//import backend.global.security.dto.LoginDto;
//import backend.global.security.jwt.JwtTokenizer;
//import com.google.gson.Gson;
//import org.junit.jupiter.api.DisplayName;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.http.MediaType;
//import org.springframework.restdocs.payload.JsonFieldType;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.ResultActions;
//import java.util.List;
//
//import static backend.util.ApiDocumentUtils.getRequestPreProcessor;
//import static backend.util.ApiDocumentUtils.getResponsePreProcessor;
//import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
//import static org.springframework.restdocs.headers.HeaderDocumentation.requestHeaders;
//import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
//import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
//import static org.springframework.restdocs.payload.PayloadDocumentation.*;
//import static org.springframework.restdocs.request.RequestDocumentation.*;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//@SpringBootTest
//@AutoConfigureMockMvc
//@AutoConfigureRestDocs
public class MemberTest {

//    @Autowired
//    private MockMvc mockMvc;
//
//    @Autowired
//    private Gson gson;
//
//    @Autowired
//    private JwtTokenizer jwtTokenizer;
//
//    @Autowired
//    private MemberRepository memberRepository;
//
//    @Autowired
//    public PasswordEncoder passwordEncoder;
//
//    @Test @DisplayName("Post_Member_Test")
//    void postMemberTest() throws Exception {
//        // given
//        MemberDto.Post dto = new MemberDto.Post();
//        dto.setEmail("test3@gmail.com");
//        dto.setPassword("123411aa");
//        dto.setNickname("????????????");
//        dto.setPhone("010-1111-2222");
//        dto.setAddress("????????? ????????? ?????????");
//        dto.setPhotoURL("http://asd311114f6asd54f6aw");
//        String body = gson.toJson(dto);
//
//        // when
//        ResultActions actions = mockMvc.perform(
//                post("/members")
//                        .accept(MediaType.APPLICATION_JSON)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(body)
//        );
//
//        // then
//        actions
//                .andExpect(status().isCreated())
//                .andDo(document("createMember",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
//                        requestFields(
//                                List.of(
//                                        fieldWithPath("email").type(JsonFieldType.STRING).description("?????? email"),
//                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("?????? ?????????"),
//                                        fieldWithPath("password").type(JsonFieldType.STRING).description("?????? ????????????"),
//                                        fieldWithPath("phone").type(JsonFieldType.STRING).description("?????? ????????????"),
//                                        fieldWithPath("address").type(JsonFieldType.STRING).description("?????? ??????"),
//                                        fieldWithPath("photoURL").type(JsonFieldType.STRING).description("?????? ?????????")
//                                )
//                        ),
//                        responseFields(
//                                List.of(
//                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("?????? ?????????"),
//                                        fieldWithPath("email").type(JsonFieldType.STRING).description("?????? ?????????"),
//                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("?????? ?????????")
//                                )
//                        )
//                ));
//    }
//
//
//    @Test @DisplayName("Patch_Member_Test")
//    void patchMemberTest() throws Exception {
//        // given
//        Long memberId = 1L;
//        Member member = memberRepository.findById(memberId).get();
//        String accessToken = jwtTokenizer.delegateAccessToken(member);
//        String jwt = "Bearer " + accessToken;
//
//        MemberDto.Patch dto = new MemberDto.Patch();
//        dto.setNickname("????????????");
//        dto.setPhone("010-9898-7878");
//        dto.setAddress("????????? ?????? ?????????");
//        dto.setPhotoURL("http://123456789dd");
//        String body = gson.toJson(dto);
//
//        // when
//        ResultActions actions = mockMvc.perform(
//                patch("/members/{memberId}", memberId)
//                        .accept(MediaType.APPLICATION_JSON)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .header("AccessToken", jwt)
//                        .content(body)
//        );
//        // then
//        actions
//                .andExpect(status().isOk())
//                .andDo(document("modifyMember",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
//                        pathParameters(
//                                parameterWithName("memberId").description("?????? ?????????")
//                        ),

//                        requestHeaders(
//                                List.of(
//                                        headerWithName("AccessToken").description("JWT")
//                                )
//                        ),

//                        requestFields(
//                                List.of(
//                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("?????? ?????????"),
//                                        fieldWithPath("phone").type(JsonFieldType.STRING).description("?????? ????????????"),
//                                        fieldWithPath("address").type(JsonFieldType.STRING).description("?????? ??????"),
//                                        fieldWithPath("photoURL").type(JsonFieldType.STRING).description("?????? ?????????")
//                                )
//                        ),
//                        responseFields(
//                                List.of(
//                                        fieldWithPath("email").type(JsonFieldType.STRING).description("?????? ?????????"),
//                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("?????? ?????????"),
//                                        fieldWithPath("phone").type(JsonFieldType.STRING).description("?????? ????????????"),
//                                        fieldWithPath("address").type(JsonFieldType.STRING).description("?????? ??????"),
//                                        fieldWithPath("photoURL").type(JsonFieldType.STRING).description("?????? ?????????")
//                                )
//                        )
//                ));
//    }
//
//
//    @Test @DisplayName("Delete_Member_Test")
//    void deleteMemberTest() throws Exception {
//        // given
//        Long memberId = 1L;
//        Member member = memberRepository.findById(memberId).get();
//        String accessToken = jwtTokenizer.delegateAccessToken(member);
//        String jwt = "Bearer " + accessToken;
//
//        // when
//        ResultActions actions = mockMvc.perform(
//                delete("/members/{memberId}", memberId)
//                        .header("AccessToken", jwt)
//        );
//
//        // then
//        actions
//                .andExpect(status().isOk())
//                .andDo(document("removeMember",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
//                        pathParameters(
//                                parameterWithName("memberId").description("?????? ?????????")
//                        ),

//                        requestHeaders(
//                                List.of(
//                                        headerWithName("AccessToken").description("JWT")
//                                )
//                        ),

//                        responseFields(
//                                List.of(
//                                        fieldWithPath("data").type(JsonFieldType.STRING).description("?????? ??????")
//                                )
//                        )
//                ));
//    }
//
//
//    @Test @DisplayName("Get_Member_Test")
//    void getMemberTest() throws Exception {
//        // given
//        Long memberId = 2L;
//
//        // when
//        ResultActions actions = mockMvc.perform(
//                get("/members/{memberId}", memberId)
//        );
//
//        // then
//        actions
//                .andExpect(status().isOk())
//                .andDo(document("getMember",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
//                        pathParameters(
//                                parameterWithName("memberId").description("?????? ?????????")
//                        ),
////                        requestHeaders(
////                                List.of(
////                                        headerWithName("AccessToken").description("JWT")
////                                )
////                        ),
//                        responseFields(
//                                List.of(
//                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("?????? ?????????"),
//                                        fieldWithPath("email").type(JsonFieldType.STRING).description("?????? ?????????"),
//                                        fieldWithPath("nickname").type(JsonFieldType.STRING).description("?????? ?????????"),
//                                        fieldWithPath("phone").type(JsonFieldType.STRING).description("?????? ????????????"),
//                                        fieldWithPath("address").type(JsonFieldType.STRING).description("?????? ??????"),
//                                        fieldWithPath("photoURL").type(JsonFieldType.STRING).description("?????? ?????????"),
//                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("?????? ?????? ??????"),
//                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("?????? ?????? ??????"),
//
//                                        fieldWithPath("payment[]").type(JsonFieldType.ARRAY).description("?????? ????????????"),
//                                        fieldWithPath("payment[].id").type(JsonFieldType.NUMBER).description("?????? ?????????"),
//                                        fieldWithPath("payment[].totalPrice").type(JsonFieldType.NUMBER).description("??? ?????? ??????"),
//                                        fieldWithPath("payment[].status").type(JsonFieldType.STRING).description("?????? ??????"),
//                                        fieldWithPath("payment[].startTime").type(JsonFieldType.STRING).description("?????? ?????? ??????"),
//                                        fieldWithPath("payment[].endTime").type(JsonFieldType.STRING).description("?????? ?????? ??????"),
//                                        fieldWithPath("payment[].payMethod").type(JsonFieldType.STRING).description("?????? ??????"),
//                                        fieldWithPath("payment[].createdAt").type(JsonFieldType.STRING).description("?????? ?????? ??????"),
//                                        fieldWithPath("payment[].modifiedAt").type(JsonFieldType.STRING).description("?????? ?????? ??????")
//                                )
//                        )
//                ));
//
//    }
//
//    @Test @DisplayName("Get_Members_Test")
//    void getMembersTest() throws Exception {
//        // given
//
//        // when
//        ResultActions actions = mockMvc.perform(
//                get("/members")
//                        .param("page", "1")
//                        .param("size","10")
//                        .param("sort", "id,desc")
//        );
//        // then
//        actions
//                .andExpect(status().isOk())
//                .andDo(document("getMembers",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
////                        requestHeaders(
////                                List.of(
////                                        headerWithName("AccessToken").description("JWT")
////                                )
////                        ),
//                        requestParameters(
//                                parameterWithName("page").description("????????? ??????(default = 1"),
//                                parameterWithName("size").description("????????? size(default = 10)"),
//                                parameterWithName("sort").description("?????? ??????(default = id, asc)")
//                        ),
//                        responseFields(
//                                List.of(
//                                        fieldWithPath("content[]").type(JsonFieldType.ARRAY).description("?????? ??????"),
//                                        fieldWithPath("content[].memberId").type(JsonFieldType.NUMBER).description("?????? ?????????"),
//                                        fieldWithPath("content[].email").type(JsonFieldType.STRING).description("?????? ?????????"),
//                                        fieldWithPath("content[].nickname").type(JsonFieldType.STRING).description("?????? ?????????"),
//                                        fieldWithPath("content[].phone").type(JsonFieldType.STRING).description("?????? ????????????"),
//                                        fieldWithPath("content[].address").type(JsonFieldType.STRING).description("?????? ??????"),
//                                        fieldWithPath("content[].photoURL").type(JsonFieldType.STRING).description("?????? ?????????"),
//                                        fieldWithPath("content[].createdAt").type(JsonFieldType.STRING).description("?????? ?????? ??????"),
//                                        fieldWithPath("content[].modifiedAt").type(JsonFieldType.STRING).description("?????? ?????? ??????"),
//
//                                        fieldWithPath("content[].payment[]").type(JsonFieldType.ARRAY).description("?????? ????????????"),
//                                        fieldWithPath("content[].payment[].id").type(JsonFieldType.NUMBER).description("?????? ?????????"),
//                                        fieldWithPath("content[].payment[].totalPrice").type(JsonFieldType.NUMBER).description("??? ?????? ??????"),
//                                        fieldWithPath("content[].payment[].status").type(JsonFieldType.STRING).description("?????? ??????"),
//                                        fieldWithPath("content[].payment[].startTime").type(JsonFieldType.STRING).description("?????? ?????? ??????"),
//                                        fieldWithPath("content[].payment[].endTime").type(JsonFieldType.STRING).description("?????? ?????? ??????"),
//                                        fieldWithPath("content[].payment[].payMethod").type(JsonFieldType.STRING).description("?????? ??????"),
//                                        fieldWithPath("content[].payment[].createdAt").type(JsonFieldType.STRING).description("?????? ?????? ??????"),
//                                        fieldWithPath("content[].payment[].modifiedAt").type(JsonFieldType.STRING).description("?????? ?????? ??????"),
//
//                                        fieldWithPath("totalPages").type(JsonFieldType.NUMBER).description("??? ????????? ???"),
//                                        fieldWithPath("totalElements").type(JsonFieldType.NUMBER).description("?????? Answer ??????"),
//                                        fieldWithPath("first").type(JsonFieldType.BOOLEAN).description("??? ????????? ??????"),
//                                        fieldWithPath("last").type(JsonFieldType.BOOLEAN).description("????????? ????????? ??????"),
//                                        fieldWithPath("sorted").type(JsonFieldType.BOOLEAN).description("?????? ??????"),
//                                        fieldWithPath("size").type(JsonFieldType.NUMBER).description("????????? size"),
//                                        fieldWithPath("pageNumber").type(JsonFieldType.NUMBER).description("????????? ??????(0?????? ??????)"),
//                                        fieldWithPath("numberOfElements").type(JsonFieldType.NUMBER).description("???????????? Question ??????")
//                                )
//                        )
//                ));
//
//    }
//
//    @Test
//    @DisplayName("Login_Member_Test")
//    void loginMemberTest() throws Exception {
//        //given
//        String email = "test3@gmail.com";
//        String password = "123411aa";
//        String encryptedPassword = passwordEncoder.encode(password);
//
//        LoginDto loginDto = new LoginDto();
//        loginDto.setEmail(email);
//        loginDto.setPassword(encryptedPassword);
//        String body = gson.toJson(loginDto);
//
//        //when
//        ResultActions actions = mockMvc.perform(
//                post("/auth/login")
//                        .accept(MediaType.APPLICATION_JSON)
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(body)
//        );
//
//        //then
//        actions
//                .andExpect(status().isOk())
//                .andDo(document("createMember",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
//                        pathParameters(
//                                parameterWithName("memberId").description("Member ?????????")
//                        ),
//                        requestHeaders(
//                                List.of(
//                                        headerWithName("AccessToken").description("JWT")
//                                )
//                        ),
//                        requestFields(
//                                List.of(
//
//                                )
//                        ),
//                        responseFields(
//                                List.of(
//
//                                )
//                        )
//                ));
//    }
//
}
