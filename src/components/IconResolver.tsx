import React from 'react';
import { 
  BookOpen, Scroll, GraduationCap, Languages, Sparkles, 
  Award, Compass, Building, Calendar, FileText, HelpCircle, 
  MapPin, Phone, Mail, ArrowRight, User, Check, AlertCircle, Combine
} from 'lucide-react';

interface IconResolverProps {
  name: string;
  className?: string;
}

export default function IconResolver({ name, className = "h-6 w-6" }: IconResolverProps) {
  switch (name) {
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Scroll':
      return <Scroll className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'Languages':
      return <Languages className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Building':
      return <Building className={className} />;
    case 'Calendar':
      return <Calendar className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    case 'HelpCircle':
      return <HelpCircle className={className} />;
    case 'MapPin':
      return <MapPin className={className} />;
    case 'Phone':
      return <Phone className={className} />;
    case 'Mail':
      return <Mail className={className} />;
    case 'ArrowRight':
      return <ArrowRight className={className} />;
    case 'User':
      return <User className={className} />;
    case 'Check':
      return <Check className={className} />;
    case 'AlertCircle':
      return <AlertCircle className={className} />;
    case 'Combine':
      return <Combine className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}
