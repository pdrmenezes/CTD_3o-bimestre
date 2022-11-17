# Creating EC2
resource "aws_instance" "dh_grupo_top" {
  count = 2
  ami = "ami-01f87c43e618bf8f0"
  instance_type = "t2.micro"
  tags = {
    Name = "gh_grupo_top"
    Terraform = "true" -- qualquer tag que atesta que foi criado com terraform
    Environment = "dev"
  }
}

# Setting security group
resource "aws_security_group" "permitir_ssh" {
  name = "permitir_ssh"
  description = "Permite SSH"
  ingress {
    description = "SSH to EC2"
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"] -- ideal colocar no ip público da sua casa/empresa
  }
  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "permitir_ssh"
  }
}