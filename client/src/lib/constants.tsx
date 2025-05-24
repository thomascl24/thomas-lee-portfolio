export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  overview: string;
  implementation: string[];
  results: string[];
}

export const projects: Project[] = [
  {
    id: "machine-learning-prediction",
    title: "Machine Learning Prediction Model",
    description: "Advanced predictive modeling using ensemble methods to forecast customer behavior with 95% accuracy.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Flask"],
    overview: "This project involved developing a comprehensive machine learning pipeline to predict customer behavior patterns using advanced ensemble methods. The model achieved 95% accuracy on the test dataset.",
    implementation: [
      "Data preprocessing and feature engineering using pandas and numpy",
      "Implementation of Random Forest, Gradient Boosting, and XGBoost models",
      "Hyperparameter tuning using GridSearchCV and RandomizedSearchCV",
      "Model validation using cross-validation and bootstrapping",
      "Performance evaluation using precision, recall, F1-score, and AUC-ROC"
    ],
    results: [
      "95% prediction accuracy on customer churn prediction",
      "Identified top 5 features driving customer behavior",
      "Reduced false positive rate by 40% compared to baseline models",
      "Deployed model using Flask API for real-time predictions"
    ]
  },
  {
    id: "data-visualization-dashboard",
    title: "Interactive Data Visualization Dashboard",
    description: "Real-time dashboard built with D3.js and React to visualize complex datasets for business intelligence.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    technologies: ["D3.js", "React", "PostgreSQL", "Node.js", "AWS"],
    overview: "Built a comprehensive real-time dashboard for business intelligence using React and D3.js, providing stakeholders with interactive visualizations of key performance metrics.",
    implementation: [
      "Real-time data updates from PostgreSQL database",
      "Interactive charts including line plots, bar charts, and heat maps",
      "Filtering and drill-down capabilities",
      "Responsive design for desktop and mobile devices",
      "Export functionality for reports and presentations"
    ],
    results: [
      "Reduced report generation time by 80%",
      "Improved decision-making speed for stakeholders",
      "Increased user engagement with data by 150%",
      "Successfully deployed on AWS with 99.9% uptime"
    ]
  },
  {
    id: "nlp-sentiment-analysis",
    title: "NLP Sentiment Analysis",
    description: "Natural language processing model to analyze customer sentiment from social media data using BERT transformers.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    technologies: ["Python", "NLTK", "Transformers", "BERT", "PyTorch"],
    overview: "Developed a sophisticated natural language processing system to analyze customer sentiment from social media data using state-of-the-art BERT transformers.",
    implementation: [
      "Web scraping of social media posts using APIs",
      "Text preprocessing and cleaning with NLTK",
      "Named entity recognition and topic modeling",
      "Sentiment classification using fine-tuned BERT",
      "Real-time sentiment monitoring dashboard"
    ],
    results: [
      "93% accuracy on sentiment classification",
      "F1-score of 0.91 across all sentiment categories",
      "Processed over 100,000 social media posts",
      "Sub-second inference time for real-time analysis"
    ]
  },
  {
    id: "deep-learning-cnn",
    title: "Deep Learning CNN for Image Classification",
    description: "Convolutional neural network achieving 98% accuracy on medical image classification for early disease detection.",
    image: "https://pixabay.com/get/g55a2b1b053ae0f09d48269f943c43ea71e047cddc05a8612526af8cdff7dc18d903754a71fa0894ca62a835c70237b5ead9337d36376291fc659010b2e1d7c9a_1280.jpg",
    technologies: ["TensorFlow", "Keras", "OpenCV", "Python", "GPU Computing"],
    overview: "Developed a convolutional neural network for medical image classification, achieving 98% accuracy in early disease detection from radiological images.",
    implementation: [
      "Custom CNN architecture with residual connections",
      "Data augmentation techniques to prevent overfitting",
      "Transfer learning from pre-trained ImageNet models",
      "Attention mechanisms for interpretability",
      "Ensemble of multiple models for robust predictions"
    ],
    results: [
      "98% accuracy in disease classification",
      "Reduced false negative rate by 60%",
      "Potential for early intervention and treatment",
      "Validated on dataset of 50,000+ medical images"
    ]
  },
  {
    id: "time-series-forecasting",
    title: "Time Series Forecasting",
    description: "ARIMA and LSTM models for financial market prediction with automated trading strategy implementation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    technologies: ["Python", "TensorFlow", "Statsmodels", "LSTM", "ARIMA"],
    overview: "Built sophisticated time series forecasting models using ARIMA and LSTM networks for financial market prediction with automated trading strategy implementation.",
    implementation: [
      "Statistical models: ARIMA, SARIMA, and VAR",
      "Deep learning: LSTM and GRU networks",
      "Feature engineering with technical indicators",
      "Ensemble methods combining multiple approaches",
      "Risk management and portfolio optimization"
    ],
    results: [
      "15% annual return with automated strategy",
      "Sharpe ratio of 1.8 over backtesting period",
      "Maximum drawdown limited to 8%",
      "Consistent performance across different market conditions"
    ]
  }
];

export interface Repository {
  name: string;
  description: string;
  language: {
    name: string;
    color: string;
  };
  stars: number;
}

export const repositories: Repository[] = [
  {
    name: "data-analysis-toolkit",
    description: "Comprehensive Python toolkit for exploratory data analysis with automated report generation.",
    language: { name: "Python", color: "bg-yellow-400" },
    stars: 42
  },
  {
    name: "ml-model-deployment",
    description: "Flask and Docker setup for deploying machine learning models to production environments.",
    language: { name: "Python", color: "bg-yellow-400" },
    stars: 28
  },
  {
    name: "statistical-analysis",
    description: "R scripts and Jupyter notebooks for advanced statistical analysis and hypothesis testing.",
    language: { name: "R", color: "bg-blue-500" },
    stars: 15
  },
  {
    name: "data-visualization-lib",
    description: "Custom JavaScript library for creating interactive data visualizations with D3.js.",
    language: { name: "JavaScript", color: "bg-yellow-300" },
    stars: 33
  },
  {
    name: "deep-learning-experiments",
    description: "Collection of neural network experiments and research implementations using TensorFlow.",
    language: { name: "Python", color: "bg-yellow-400" },
    stars: 67
  },
  {
    name: "web-scraping-tools",
    description: "Efficient web scraping utilities with BeautifulSoup and Selenium for data collection.",
    language: { name: "Python", color: "bg-yellow-400" },
    stars: 19
  }
];
