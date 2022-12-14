package backend.domain.member.dto;

import backend.domain.member.entity.Member;
import backend.domain.member.entity.MemberPayment;
import backend.domain.payment.entity.Payment;
import backend.global.auditing.BaseTime;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class MemberResDto extends BaseTime {
    private Long memberId;
    private String email;
    private String nickname;
    private String phone;
    private String address;
    private String detailAddress;
    private String photoURL;
    private List<MemberPayment> payment;

    public MemberResDto(Member member) {
        this.memberId = member.getId();
        this.email = member.getEmail();
        this.nickname = member.getNickname();
        this.phone = member.getPhone();
        this.address = member.getAddress();
        this.detailAddress = member.getDetailAddress();
        this.photoURL = member.getPhotoURL();
        setCreatedAt(member.getCreatedAt());
        setModifiedAt(member.getModifiedAt());

        List<MemberPayment> list = new ArrayList<>();
        for (int i = 0; i < member.getPayment().size(); i++) {
            MemberPayment memberPayment = new MemberPayment().builder()
                    .id(member.getPayment().get(i).getId())
                    .totalPrice(member.getPayment().get(i).getTotalPrice())
                    .status(member.getPayment().get(i).getStatus())
                    .startTime(member.getPayment().get(i).getStartTime())
                    .endTime(member.getPayment().get(i).getEndTime())
                    .payMethod(member.getPayment().get(i).getPayMethod())
                    .batteryName(member.getPayment().get(i).getBattery().getBatteryName())
                    .batteryPhotoURL(member.getPayment().get(i).getBattery().getPhotoURL())
                    .stationName(member.getPayment().get(i).getStation().getName())
                    .build();
            memberPayment.setCreatedAt(member.getPayment().get(i).getCreatedAt());
            memberPayment.setModifiedAt(member.getPayment().get(i).getModifiedAt());

            list.add(memberPayment);
        }

        this.payment = list;
    }

}