pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        PATH = "/usr/local/bin:/usr/bin:$PATH"  // បន្ថែម path សំខាន់ៗ
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/rakcomputing/jenkinsapp.git'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo '✅ Build completed!'
        }
        failure {
            echo '❌ Build failed.'
        }
    }
}
