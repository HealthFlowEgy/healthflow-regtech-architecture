import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { ScrollArea } from '@/components/ui/scroll-area.jsx'
import { 
  Server, 
  Shield, 
  GitBranch, 
  Database, 
  Monitor, 
  Cloud, 
  Lock, 
  Zap,
  FileText,
  Download,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Layers,
  Settings,
  BarChart3
} from 'lucide-react'
import './App.css'

// Import architecture diagrams
import mainArchitecture from './assets/healthflow_devops_architecture.png'
import cicdPipeline from './assets/healthflow_cicd_pipeline.png'
import securityArchitecture from './assets/healthflow_security_architecture.png'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  // Download function for documentation
  const downloadFile = (filename, displayName) => {
    const link = document.createElement('a')
    link.href = `/${filename}`
    link.download = displayName || filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Open external link function
  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const architectureFeatures = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "Kubernetes Orchestration",
      description: "Cloud-native microservices with auto-scaling and high availability"
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "GitHub Actions CI/CD",
      description: "Automated pipelines with healthcare compliance validation"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Zero Trust Security",
      description: "PKI infrastructure with blockchain audit trails"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Polyglot Persistence",
      description: "Optimized data storage for different healthcare use cases"
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Comprehensive Monitoring",
      description: "Prometheus, Grafana, and ELK stack for observability"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Compliance Ready",
      description: "HIPAA, PCI DSS, and ISO 27001 compliance frameworks"
    }
  ]

  const regTechModules = [
    {
      name: "HFCX Claims Exchange",
      description: "Real-time healthcare claims processing platform",
      technologies: ["Spring Boot", "PostgreSQL", "Kafka", "FHIR"],
      status: "Core Module"
    },
    {
      name: "HPR Registry",
      description: "Healthcare professionals registry with PKI certificates",
      technologies: ["Node.js", "MongoDB", "EJBCA", "PKI"],
      status: "Core Module"
    },
    {
      name: "Digital Prescription",
      description: "Secure e-prescription platform with drug interaction checking",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Blockchain"],
      status: "Core Module"
    }
  ]

  const implementationPhases = [
    {
      phase: "Phase 1",
      title: "Foundation Infrastructure",
      duration: "Months 1-3",
      items: ["Kubernetes cluster setup", "PKI infrastructure", "Basic monitoring", "Development environment"]
    },
    {
      phase: "Phase 2", 
      title: "Core RegTech Modules",
      duration: "Months 4-8",
      items: ["HFCX Claims Exchange", "HPR Registry", "Digital Prescription Platform", "Basic integrations"]
    },
    {
      phase: "Phase 3",
      title: "Advanced Features",
      duration: "Months 9-12", 
      items: ["AI/ML capabilities", "Blockchain integration", "Advanced security", "Fraud detection"]
    },
    {
      phase: "Phase 4",
      title: "Production Deployment",
      duration: "Months 13-18",
      items: ["Production environment", "Partner integrations", "Performance optimization", "Go-live"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Server className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">HealthFlow RegTech</h1>
                <p className="text-sm text-gray-600">DevOps Architecture Design</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <CheckCircle className="h-3 w-3 mr-1" />
                Production Ready
              </Badge>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => downloadFile('HealthFlow_DevOps_Architecture.md', 'HealthFlow_DevOps_Architecture.md')}
              >
                <Download className="h-4 w-4 mr-2" />
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6" id="hero">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional DevOps Architecture for
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Healthcare RegTech</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive cloud-native infrastructure design for HealthFlow's RegTech platform, 
              supporting 105M users with enterprise-grade security, compliance, and scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                onClick={() => scrollToSection('architecture-content')}
              >
                <Layers className="h-5 w-5 mr-2" />
                Explore Architecture
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => downloadFile('HealthFlow_DevOps_Architecture.md', 'HealthFlow_DevOps_Architecture.md')}
              >
                <FileText className="h-5 w-5 mr-2" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Features Grid */}
      <section className="py-16 px-6 bg-white/50" id="features">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Architecture Highlights</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with proven GitHub-based modules and healthcare technology best practices
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architectureFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg text-blue-600">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-6" id="architecture-content">
        <div className="container mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Architecture Overview</TabsTrigger>
              <TabsTrigger value="security">Security Design</TabsTrigger>
              <TabsTrigger value="cicd">CI/CD Pipeline</TabsTrigger>
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Layers className="h-5 w-5" />
                    <span>Complete Infrastructure Architecture</span>
                  </CardTitle>
                  <CardDescription>
                    Cloud-native microservices architecture with Kubernetes orchestration, 
                    GitHub Actions CI/CD, and comprehensive security framework
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg overflow-hidden border bg-white p-4">
                    <img 
                      src={mainArchitecture} 
                      alt="HealthFlow DevOps Architecture" 
                      className="w-full h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => window.open(mainArchitecture, '_blank')}
                    />
                  </div>
                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    {regTechModules.map((module, index) => (
                      <Card key={index} className="border border-gray-200">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">{module.name}</CardTitle>
                            <Badge variant="secondary">{module.status}</Badge>
                          </div>
                          <CardDescription className="text-sm">
                            {module.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex flex-wrap gap-1">
                            {module.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Multi-Layered Security Architecture</span>
                  </CardTitle>
                  <CardDescription>
                    Zero-trust security model with PKI infrastructure, blockchain audit trails, 
                    and comprehensive compliance frameworks (HIPAA, PCI DSS, ISO 27001)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg overflow-hidden border bg-white p-4">
                    <img 
                      src={securityArchitecture} 
                      alt="HealthFlow Security Architecture" 
                      className="w-full h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => window.open(securityArchitecture, '_blank')}
                    />
                  </div>
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <Lock className="h-4 w-4 mr-2" />
                        Security Layers
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Perimeter Security (WAF, DDoS Protection)</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Network Security (VPC, Security Groups)</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Identity & Access Management</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Application Security (mTLS)</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Data Security (Encryption)</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Blockchain Immutable Audit</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <Settings className="h-4 w-4 mr-2" />
                        Compliance Frameworks
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />HIPAA Healthcare Compliance</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />PCI DSS Payment Security</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />ISO 27001 Information Security</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Egyptian Healthcare Regulations</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />GDPR Data Protection</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />SOC 2 Type II Controls</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cicd" className="space-y-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GitBranch className="h-5 w-5" />
                    <span>GitHub Actions CI/CD Pipeline</span>
                  </CardTitle>
                  <CardDescription>
                    Automated deployment pipeline with healthcare-specific compliance validation, 
                    security scanning, and progressive delivery patterns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg overflow-hidden border bg-white p-4">
                    <img 
                      src={cicdPipeline} 
                      alt="HealthFlow CI/CD Pipeline" 
                      className="w-full h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => window.open(cicdPipeline, '_blank')}
                    />
                  </div>
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <Zap className="h-4 w-4 mr-2" />
                        Pipeline Stages
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-600" />Code Quality (SonarQube, CodeQL)</li>
                        <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-600" />Security Scanning (Snyk, Trivy)</li>
                        <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-600" />Automated Testing (Unit, Integration, E2E)</li>
                        <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-600" />Compliance Validation (HIPAA, PCI)</li>
                        <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-600" />Container Build & Scan</li>
                        <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-blue-600" />GitOps Deployment (ArgoCD)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center">
                        <Cloud className="h-4 w-4 mr-2" />
                        Deployment Strategy
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Blue-Green Deployments</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Canary Releases</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Automated Rollbacks</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Feature Flags</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Environment Promotion</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />Monitoring Feedback</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="implementation" className="space-y-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>18-Month Implementation Roadmap</span>
                  </CardTitle>
                  <CardDescription>
                    Phased approach to deploying the complete HealthFlow RegTech infrastructure 
                    with risk mitigation and progressive capability delivery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {implementationPhases.map((phase, index) => (
                      <div key={index} className="border rounded-lg p-6 bg-gradient-to-r from-blue-50 to-green-50">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-semibold text-lg text-gray-900">{phase.phase}: {phase.title}</h4>
                            <p className="text-sm text-gray-600">{phase.duration}</p>
                          </div>
                          <Badge variant="outline" className="bg-white">
                            {phase.phase}
                          </Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          {phase.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg text-white">
                    <h4 className="font-semibold text-lg mb-2">Ready to Get Started?</h4>
                    <p className="mb-4 opacity-90">
                      The architecture is designed for immediate implementation with proven technologies 
                      and healthcare industry best practices.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        variant="secondary" 
                        className="bg-white text-blue-600 hover:bg-gray-100"
                        onClick={() => downloadFile('HealthFlow_DevOps_Architecture.md', 'HealthFlow_DevOps_Architecture.md')}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Full Documentation
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-white text-white hover:bg-white/10"
                        onClick={() => downloadFile('HealthFlow_Technical_Specifications.md', 'HealthFlow_Technical_Specifications.md')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Technical Specifications
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <Server className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-lg">HealthFlow RegTech</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional DevOps architecture for healthcare regulatory technology, 
                designed with enterprise-grade security and compliance.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Architecture Components</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setActiveTab('overview')}>Kubernetes Orchestration</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setActiveTab('cicd')}>GitHub Actions CI/CD</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setActiveTab('security')}>Zero Trust Security</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setActiveTab('security')}>Blockchain Audit Trails</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setActiveTab('overview')}>Comprehensive Monitoring</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Compliance & Standards</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setActiveTab('security')}>HIPAA Healthcare Compliance</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setActiveTab('security')}>PCI DSS Payment Security</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setActiveTab('security')}>ISO 27001 Information Security</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => setActiveTab('security')}>Egyptian Healthcare Regulations</li>
                <li className="cursor-pointer hover:text-white transition-colors" onClick={() => openExternalLink('https://hl7.org/fhir/')}>FHIR R4 Interoperability</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 HealthFlow RegTech Architecture. Designed by HealthFlow Team.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

