pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        PATH = "/usr/local/bin:$PATH"  // បើ run npm/node ដោយ path
    }

    tools {
        nodejs 'Node20' // ឬ Node18 ប្រសិនបើអ្នកបាន setup ជា tool
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

        stage('Lint (Optional)') {
            steps {
                sh 'npm run lint || true'
            }
        }

        stage('Start (Optional)') {
            when {
                branch 'main'
            }
            steps {
                echo 'Starting app (for testing)...'
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
