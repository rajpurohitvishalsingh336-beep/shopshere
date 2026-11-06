
pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    stages {

        stage('Clone') {
            steps {
                echo 'Cloning GitHub Repository'
                checkout scm
            }
        }

        stage('Compile') {
            steps {
                echo 'Compiling Java Program'
                sh 'mkdir -p out'
                sh 'javac -d out HelloWorld.java'
            }
        }

        stage('Execute') {
            steps {
                echo 'Executing Java Application'
                sh 'java -cp out HelloWorld'
            }
        }
    }
}
