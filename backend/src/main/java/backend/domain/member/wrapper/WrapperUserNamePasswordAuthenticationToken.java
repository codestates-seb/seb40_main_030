package backend.domain.member.wrapper;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Getter
@Setter
public class WrapperUserNamePasswordAuthenticationToken extends UsernamePasswordAuthenticationToken {

    private Long memberId;

    public WrapperUserNamePasswordAuthenticationToken(Object principal, Object credentials, Collection<? extends GrantedAuthority> authorities, Long memberId) {
        super(principal, credentials, authorities);
        this.memberId = memberId;
    }
}
