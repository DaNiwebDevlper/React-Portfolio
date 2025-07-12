import { motion } from "framer-motion"
import { Calendar, MapPin, GraduationCap, Briefcase, Award, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Experiences from "./../../data/Experience.json"
import Education from "./../../data/Education.json"
import { Link } from "react-router-dom"


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
    },
  },
}

export default function Experience() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent mb-4">
            Experience & Education
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background that shaped my expertise in web development
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-[#333] dark:bg-blue-900/30 rounded-lg">
              <Briefcase className="h-6 w-6 text-teal-600 " />
            </div>
            <h2 className="text-3xl text-white font-bold text-foreground">Work Experience</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />

            <div className="space-y-8">
              {Experiences.map((exp, index) => (
                <motion.div key={exp.id} variants={itemVariants} whileHover={{ x: 10 }} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-teal-500 rounded-full border-4 border-teal-500/10 shadow-lg hidden md:block" />

                  <Card className="ml-0 border-white/40 bg-black/50 md:ml-20 hover:shadow-lg transition-all duration-300 border-l-4 border-l-teal-500">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl font-semibold text-white/70">{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-medium text-teal-600 ">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col md:items-end gap-1">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Award className="h-4 w-4 text-green-600" />
                          Key Achievements
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="text-sm font-normal bg-[#333] text-white/50">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-[#333]  rounded-lg">
              <GraduationCap className="h-6 w-6 text-teal-600 " />
            </div>
            <h2 className="text-3xl text-white font-bold text-foreground">Education</h2>
          </motion.div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              {Education.map((edu, index) => (
                <motion.div key={edu.id} variants={cardVariants} whileHover="hover">
                  <Card className="h-full bg-black/50 text-white/90 hover:shadow-xl transition-all duration-300 border-l-4 border-l-teal-500">
                    <CardHeader>
                      <CardTitle className="text-xl text-white font-semibold ">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg font-medium text-teal-600 ">
                        {edu.school}
                      </CardDescription>
                      <div className="flex flex-col gap-1 pt-2">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                        {edu.gpa && (
                          <div className="text-sm font-medium text-green-600 dark:text-green-400">GPA: {edu.gpa}</div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>

                      <div>
                        <h4 className="font-semibold mb-2">Key Courses</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, i) => (
                            <Badge key={i} className="text-xs text-white/70 bg-[#333]">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {edu.achievements && (
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Award className="h-4 w-4 text-yellow-600" />
                            Achievements
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16 p-8  rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-teal-600">Ready to Work Together?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects. Let's discuss how my
            experience can contribute to your next big idea.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            <Link to="/contact" className="flex items-center gap-2">
              Get In Touch
            </Link>
            <ExternalLink className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
