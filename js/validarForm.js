//Currículo web - CompJunior - PS2016
$(function(){

            // validacao de campos
            $('#contactform').bootstrapValidator({
                
                message: 'Este valor não é válido',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    nome: {            
                        validators: {
                            notEmpty: {
                                message: 'O campo Nome é obrigatório'
                            }
                        }
                    },
                    email: {
                        validators: {
                            notEmpty: {
                                message: 'O campo E-mail é obrigatório'
                            },
                            emailAddress: {
                                message: 'O valor não é um endereço de email válido'
                            }
                        }
                    },
                    telefone: {            
                        validators: {
                            notEmpty: {
                                message: 'O campo Telefone é obrigatório'
                            }
                        }
                    }, 
                    mensagem: {
                        validators: {
                            notEmpty: {
                                message: 'O campo Mensagem é obrigatório'
                            }
                        }
                    }         
                }
            });                          
        });