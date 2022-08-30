package com.app.puntoVentaBackOficial.eception;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Getter
@Setter
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNoteFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    private String resourseName;
    private String fieldName;
    private Long fieldValue;

    public ResourceNoteFoundException(String resourseName, String fieldName, Long fieldValue) {
        super(String.format("%s no encontrado con : %s : '%s'", resourseName, fieldName, fieldValue));
        this.resourseName = resourseName;
        this.fieldName = fieldName;
        this.fieldValue = fieldValue;
    }
}
