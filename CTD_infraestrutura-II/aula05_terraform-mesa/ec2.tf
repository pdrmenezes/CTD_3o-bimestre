resource "aws_instance" "dh_grupo_top" {
  count         = 1
  ami                    = "ami-04505e74c0741db8d"
  instance_type          = "t2.micro"
  tags = {
    Name = "dh_grupo_top"
    Terraform   = "true"
    1 = "pedro"
    2 = "dafne"
    3 = "nayla"
    4 = "anna"
    5 = "ector"
    
 }
}
resource "aws_security_group" "permitir_ssh" {
  name        = "permitir_ssh"
  description = "Permite SSH"
  ingress {
    description = "SSH to EC2"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
    Name = "permitir_ssh"
  }
}
