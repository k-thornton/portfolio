import mongoose, { Document, Schema } from 'mongoose';

export interface IResume extends Document {
  personalDetails: {
    name: {
      first: string;
      last: string;
    };
    email: string;
    linkedin: string;
    featuredYoutube: {
      videoId: string;
      title: string;
    };
  };
  workExperience: {
    jobTitle: string;
    organization: string;
    location: string;
    dateRange: string;
    summary: string;
    tasks: string[];
    logo: string;
  }[];
  education: {
    institution: string;
    degree: string;
    location: string;
    dateRange: string;
  }[];
}

const ResumeSchema: Schema = new Schema({
  personalDetails: {
    name: {
      first: { type: String, required: true },
      last: { type: String, required: true }
    },
    email: { type: String, required: true },
    linkedin: { type: String },
    featuredYoutube: {
      videoId: { type: String },
      title: { type: String }
    }
  },
  workExperience: [{
    jobTitle: { type: String, required: true },
    organization: { type: String, required: true },
    location: { type: String, required: true },
    dateRange: { type: String, required: true },
    summary: { type: String, required: true },
    tasks: [String],
    logo: { type: String, required: true }
  }],
  education: [{
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    location: { type: String, required: true },
    dateRange: { type: String, required: true }
  }]
});

const Resume = mongoose.model<IResume>('Resume', ResumeSchema);
export default Resume;
