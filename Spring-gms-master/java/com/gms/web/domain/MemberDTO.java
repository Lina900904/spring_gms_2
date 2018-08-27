package com.gms.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class MemberDTO {
	private String id, password,ssn,name, gender, roll,   teamId, age;

}
