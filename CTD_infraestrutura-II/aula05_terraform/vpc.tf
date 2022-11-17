# Creating VPC
resource "aws_default_vpc" "shared-vpc" {
  tags = {
    Name = "Default VPC"
  }
}

resource "aws_subnet" "my-subnet" {

}

