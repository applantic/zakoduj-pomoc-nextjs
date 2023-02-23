provider "aws" {
  region     = "eu-west-1"
  default_tags {
    tags = {
      Terraform = "true"
    }
  }
}

terraform {
  backend "s3" {
    bucket = "zakoduj-pomoc-nextjs-tf-state"
    key    = "zakoduj-pomoc-nextjs.tfstate"
    region = "eu-west-1"
  }
}

resource "aws_amplify_app" "zakoduj-pomoc-nextjs" {
  name = "zakoduj-pomoc-nextjs"
  repository = "https://github.com/applantic/zakoduj-pomoc-nextjs"

  build_spec = <<-EOT
    version: 0.1
    frontend:
      phases:
        preBuild:
          commands:
            - yarn install
        build:
          commands:
            - yarn run build
      artifacts:
        baseDirectory: build
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
  EOT

  # The default rewrites and redirects added by the Amplify Console.
  custom_rule {
    source = "/<*>"
    status = "404"
    target = "/index.html"
  }

  environment_variables = {
    ENV = "test"
  }

  enable_auto_branch_creation = true

  # The default patterns added by the Amplify Console.
  auto_branch_creation_patterns = [
    "*",
    "*/**",
  ]

  auto_branch_creation_config {
    # Enable auto build for the created branch.
    enable_auto_build = true
  }

  enable_basic_auth      = true
}
