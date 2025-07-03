pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        PATH = "/usr/local/bin:$PATH"  // ប្រសិនបើ node/npm ត្រូវបានដំឡើងនៅទីនេះ
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

        stage('Start (Optional)') {
            when {
                branch 'main'
            }
            steps {
                sh 'npm run start & sleep 5'
            }
        }
    }

    post {
        success {
            echo '✅ Build & Next.js compilation complete!'
        }
        failure {
            echo '❌ Build failed. Check errors above.'
        }
    }
}
