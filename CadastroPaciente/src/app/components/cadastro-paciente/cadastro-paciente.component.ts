import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {
  listCadastro:any[]=[
  {prontuario:'122', nome: 'maria',sobrenome:'silva', dataNascimento:'01/01/2000', genero:'feminio', cpf:'12345678910', rg:'123456789', uf:'sp',email:'maria@hotmail.com', celular:'11912365489', telefone:'1112233665', convenio:'asdf', carteirinha:'123450', validade:'12/03'},
  {prontuario:'152', nome: 'joao',sobrenome:'santos', dataNascimento:'10/11/2000', genero:'masculino', cpf:'12345644480', rg:'177756789', uf:'sp',email:'joao@hotmail.com', celular:'11912365489', telefone:'1112233665', convenio:'asdf', carteirinha:'123450', validade:'12/03'}
  ];

  form:FormGroup;
  
  constructor(private fb: FormBuilder,
    private toastr: ToastrService) {
    this.form = this.fb.group({
      prontuario:['',Validators.required], 
      nome: ['',Validators.required],
      sobrenome:['',Validators.required], 
      dataNascimento:['',[Validators.required, Validators.maxLength(10), Validators.minLength(8)]], 
      genero:['',Validators.required], 
      cpf:['',[Validators.maxLength(14), Validators.minLength(11)]], 
      rg:['',[Validators.maxLength(12), Validators.minLength(9)]], 
      uf:['', ],
      email:['',Validators.required], 
      celular:['',Validators.required, Validators.maxLength(11), [Validators.minLength(9)]], 
      telefone:['', Validators.required, Validators.maxLength(11), [Validators.minLength(9)]], 
      convenio:[''], 
      carteirinha:['', Validators.required],
      validade:['',[Validators.maxLength(7), Validators.minLength(4)]]
    })
   }

  ngOnInit(): void {
  }

adicionarCadastro(){
  console.log(this.form)

  const cadastro: any = {
    prontuario: this.form.get('prontuario')?.value,
    nome: this.form.get('nome')?.value,
    sobrenome: this.form.get('sobrenome')?.value,
    dataNascimento: this.form.get('dataNascimento')?.value,
    genero: this.form.get('genero')?.value,
    cpf: this.form.get('cpf')?.value,
    rg: this.form.get('rg')?.value,
    uf: this.form.get('uf')?.value,
    email: this.form.get('email')?.value,
    celular: this.form.get('celular')?.value,
    telefone: this.form.get('telefone')?.value,
    carteirinha: this.form.get('carteirinha')?.value,
    validade: this.form.get('validade')?.value

  }
  this.listCadastro.push(cadastro)
  this.toastr.success('O paciente foi cadastrado com sucesso!', 'Paciente Cadastrado!')
  this.form.reset
}

}
