# CI/CD Pipeline Setup Guide

This guide will help you set up the complete CI/CD pipeline for CloudOps Pro with DockerHub and ArgoCD GitOps.

## 🏗️ Architecture Overview

```
GitHub Repository (Main)
├── Code Changes
├── CI Pipeline (GitHub Actions)
│   ├── Build Docker Image
│   ├── Push to DockerHub
│   └── Update GitOps Repository
└── CD Pipeline (ArgoCD)
    ├── Monitor GitOps Repository
    ├── Sync to Kubernetes
    └── Deploy Application
```

## 📋 Prerequisites

1. **GitHub Account** with repository access
2. **DockerHub Account** for image storage
3. **Kubernetes Cluster** with ArgoCD installed
4. **GitOps Repository** for Kubernetes manifests

## 🔧 Step-by-Step Setup

### 1. Set Up GitHub Secrets

In your main repository (`Settings` → `Secrets and variables` → `Actions`):

#### Required Secrets:
- `DOCKERHUB_USERNAME`: Your DockerHub username
- `DOCKERHUB_PASSWORD`: Your DockerHub password/token
- `GITOPS_TOKEN`: GitHub Personal Access Token

#### Create GitHub Token:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes:
   - `repo` (full control of private repositories)
   - `workflow` (update GitHub Action workflows)
4. Copy the token and save as `GITOPS_TOKEN`

### 2. Create GitOps Repository

Create a new GitHub repository for your GitOps manifests:

```bash
# Create new repository on GitHub
# Clone it locally
git clone https://github.com/your-username/your-gitops-repo
cd your-gitops-repo

# Create directory structure
mkdir -p k8s/cloudops-pro
mkdir -p argocd/applications

# Copy Kubernetes manifests
cp ../cloudops_pro/k8s/* k8s/cloudops-pro/

# Create ArgoCD application
# Copy the argocd-app.yaml content to argocd/applications/cloudops-pro.yaml

# Commit and push
git add .
git commit -m "Initial GitOps setup"
git push origin main
```

### 3. Update CI/CD Configuration

In your main repository's `.github/workflows/cicd.yaml`, update:

```yaml
env:
  GITOPS_REPO: your-username/your-gitops-repo  # Update this
  GITOPS_BRANCH: main
  GITOPS_PATH: k8s/cloudops-pro
```

### 4. Install ArgoCD

#### Using Helm:
```bash
# Add ArgoCD Helm repository
helm repo add argo https://argoproj.github.io/argo-helm
helm repo update

# Install ArgoCD
helm install argocd argo/argo-cd \
  --namespace argocd \
  --create-namespace \
  --set server.ingress.enabled=true \
  --set server.ingress.hosts[0]=argocd.your-domain.com
```

#### Using kubectl:
```bash
# Install ArgoCD
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

### 5. Configure ArgoCD Application

Apply the ArgoCD application manifest:

```bash
# Update the repository URL in argocd-app.yaml
# Apply to your cluster
kubectl apply -f argocd-app.yaml
```

### 6. Access ArgoCD

Get the ArgoCD admin password:
```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
```

Access ArgoCD UI:
```bash
kubectl port-forward svc/argocd-server -n argocd 8080:443
# Open https://localhost:8080
# Username: admin
# Password: (from above command)
```

## 🚀 Testing the Pipeline

### 1. Make a Code Change

```bash
# Make a small change to your code
echo "# Test change" >> README.md
git add README.md
git commit -m "Test CI/CD pipeline"
git push origin main
```

### 2. Monitor the Pipeline

1. **GitHub Actions**: Check the Actions tab in your repository
2. **DockerHub**: Verify the image was pushed
3. **GitOps Repository**: Check for new commits
4. **ArgoCD**: Monitor the sync status

### 3. Verify Deployment

```bash
# Check ArgoCD application status
kubectl get applications -n argocd

# Check deployment status
kubectl get pods -n cloudops-pro

# Check service
kubectl get services -n cloudops-pro
```

## 🔍 Monitoring and Debugging

### GitHub Actions Logs

Check the Actions tab in your repository for:
- Build logs
- Push logs
- GitOps update logs

### ArgoCD Monitoring

```bash
# Check application status
kubectl get applications -n argocd

# Check sync status
kubectl describe application cloudops-pro -n argocd

# View ArgoCD logs
kubectl logs -f deployment/argocd-server -n argocd
```

### Kubernetes Resources

```bash
# Check all resources in namespace
kubectl get all -n cloudops-pro

# Check deployment events
kubectl describe deployment cloudops-pro -n cloudops-pro

# Check pod logs
kubectl logs -f deployment/cloudops-pro -n cloudops-pro
```

## 🔧 Troubleshooting

### Common Issues

#### 1. DockerHub Authentication Failed
- Verify `DOCKERHUB_USERNAME` and `DOCKERHUB_PASSWORD` secrets
- Check if DockerHub token has correct permissions

#### 2. GitOps Repository Access Denied
- Verify `GITOPS_TOKEN` has correct permissions
- Check repository name in CI/CD configuration
- Ensure token has access to the GitOps repository

#### 3. ArgoCD Sync Failed
- Check ArgoCD application status
- Verify repository URL and path
- Check Kubernetes cluster connectivity

#### 4. Image Pull Errors
- Verify image exists in DockerHub
- Check image name and tag in deployment
- Ensure Kubernetes cluster can access DockerHub

### Debug Commands

```bash
# Check GitHub Actions workflow
gh run list --workflow=CI-CD-Pipeline

# Check DockerHub images
docker pull your-username/cloudops-pro:latest

# Check ArgoCD application
kubectl get applications -n argocd -o yaml

# Check deployment events
kubectl get events -n cloudops-pro --sort-by='.lastTimestamp'
```

## 🔄 Manual Deployment

### Trigger Manual Deployment

1. Go to your repository's Actions tab
2. Select the "CI/CD Pipeline" workflow
3. Click "Run workflow"
4. Choose environment (staging/production)
5. Click "Run workflow"

### Manual GitOps Update

```bash
# Clone GitOps repository
git clone https://github.com/your-username/your-gitops-repo
cd your-gitops-repo

# Update image tag manually
sed -i 's|image:.*|image: your-username/cloudops-pro:manual-tag|g' k8s/cloudops-pro/deployment.yaml

# Commit and push
git add .
git commit -m "Manual image update"
git push origin main
```

## 📈 Advanced Configuration

### Environment-Specific Deployments

Create separate ArgoCD applications for different environments:

```yaml
# staging-app.yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: cloudops-pro-staging
  namespace: argocd
spec:
  project: staging
  source:
    repoURL: https://github.com/your-username/your-gitops-repo
    targetRevision: staging
    path: k8s/cloudops-pro-staging
  destination:
    server: https://kubernetes.default.svc
    namespace: cloudops-pro-staging
```

### Multi-Cluster Deployment

Configure ArgoCD for multiple clusters:

```yaml
# production-app.yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: cloudops-pro-production
  namespace: argocd
spec:
  project: production
  source:
    repoURL: https://github.com/your-username/your-gitops-repo
    targetRevision: production
    path: k8s/cloudops-pro
  destination:
    server: https://production-cluster.example.com
    namespace: cloudops-pro
```

## 🎯 Best Practices

1. **Image Tagging**: Use semantic versioning for image tags
2. **Rollback Strategy**: Keep deployment history for easy rollbacks
3. **Security**: Use secrets for sensitive data
4. **Monitoring**: Set up alerts for deployment failures
5. **Testing**: Include automated tests in CI pipeline
6. **Documentation**: Keep deployment procedures documented

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [ArgoCD Documentation](https://argo-cd.readthedocs.io/)
- [DockerHub Documentation](https://docs.docker.com/docker-hub/)
- [Kubernetes Documentation](https://kubernetes.io/docs/) 