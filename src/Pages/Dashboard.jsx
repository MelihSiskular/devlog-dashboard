import Toast from "../Components/Toast"
import { useEffect, useState } from "react"
import ContributionGrid from "../Components/ContributionGrid"
import DailyLogCard from "../Components/DailyLogCard"
import Sidebar from "../Components/Sidebar"
import StatsCard from "../Components/StatsCard"
import ProjectForm from "../Components/ProjectForm"
import ProjectCard from "../Components/ProjectCard"

function Dashboard() {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("devlog-projects")

    if (savedProjects) {
      return JSON.parse(savedProjects)
    }

    return [
      {
        id: 1,
        title: "Portfolio Website",
        description: "Updated project section and added GitHub links.",
        status: "In Progress",
      },
      {
        id: 2,
        title: "Fantasy Football App",
        description: "Worked on new dashboard UI and match simulation screen.",
        status: "Planning",
      },
    ]
  })

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    status: "Planning",
  })

  const [editingId, setEditingId] = useState(null)

const [activityLogs, setActivityLogs] = useState(() => {
  const savedLogs = localStorage.getItem("devlog-activity-logs")
  return savedLogs ? JSON.parse(savedLogs) : []
})

    

  const [toastMessage, setToastMessage] = useState("")
  const [contributionCount, setContributionCount] = useState(() => {
  const savedCount = localStorage.getItem("devlog-contribution-count")
  return savedCount ? JSON.parse(savedCount) : 6
})

const [totalUpdates, setTotalUpdates] = useState(() => {
  const savedTotal = localStorage.getItem("devlog-total-updates")
  return savedTotal ? JSON.parse(savedTotal) : 0
})

const [resetCount, setResetCount] = useState(() => {
  const savedReset = localStorage.getItem("devlog-reset-count")
  return savedReset ? JSON.parse(savedReset) : 0
})

useEffect(() => {
      localStorage.setItem(
        "devlog-contribution-count",
        JSON.stringify(contributionCount)
      )
    }, [contributionCount])

useEffect(() => {
  localStorage.setItem("devlog-projects", JSON.stringify(projects))
}, [projects])

useEffect(() => {
  localStorage.setItem(
    "devlog-total-updates",
    JSON.stringify(totalUpdates)
  )
}, [totalUpdates])

useEffect(() => {
  localStorage.setItem(
    "devlog-reset-count",
    JSON.stringify(resetCount)
  )
}, [resetCount])
useEffect(() => {
  localStorage.setItem(
    "devlog-activity-logs",
    JSON.stringify(activityLogs)
  )
}, [activityLogs])

const increaseContribution = () => {
  setTotalUpdates((prev) => prev + 1)

  setContributionCount((prev) => {
    if (prev >= 35) {
      setResetCount((resetPrev) => resetPrev + 1)
      return 1
    }

    return prev + 1
  })
}

const addActivityLog = (type, title, note) => {
  const newLog = {
    id: Date.now(),
    type,
    title,
    note,
    date: new Date().toLocaleDateString("tr-TR"),
  }

  setActivityLogs((prevLogs) => [newLog, ...prevLogs])
}

  const addProject = () => {
    if (!newProject.title || !newProject.description) {
      return
    }

    if (editingId) {
      setProjects(
        projects.map((project) =>
          project.id === editingId
            ? { ...newProject, id: editingId }
            : project
        )
      )

      increaseContribution()

      addActivityLog(
        "updated",
        `${newProject.title} updated`,
        "Project details were updated successfully."
      )

      setToastMessage("Project Updated ✏️")

      setTimeout(() => {
        setToastMessage("")
      }, 2000)

      setEditingId(null)
    }else {
      const project = {
        id: Date.now(),
        ...newProject,
      }

      setProjects([project, ...projects])

      increaseContribution()

      addActivityLog(
        "added",
        `${newProject.title} added`,
        "A new project was added to your DevLog dashboard."
      )

      setToastMessage("Project Added ✅")

      setTimeout(() => {
      setToastMessage("")
    }, 2000)
  }

    setNewProject({
      title: "",
      description: "",
      status: "Planning",
    })
  }

const deleteProject = (id) => {
  const deletedProject = projects.find(
    (project) => project.id === id
  )

  setProjects(
    projects.filter((project) => project.id !== id)
  )

  addActivityLog(
    "deleted",
    `${deletedProject.title} deleted`,
    "A project was removed from your dashboard."
  )

  setToastMessage("Project Deleted 🗑️")

  setTimeout(() => {
    setToastMessage("")
  }, 2000)
}

  const startEditProject = (project) => {
    setNewProject({
      title: project.title,
      description: project.description,
      status: project.status,
    })
    setEditingId(project.id)
  }

  const cancelEdit = () => {
    setEditingId(null)

    setNewProject({
      title: "",
      description: "",
      status: "Planning",
    })
  }

  return (
    <div className="flex bg-[#0d1117] min-h-screen">
      <Toast message={toastMessage} />
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold text-white mb-2">
          Welcome back 👋
        </h1>

        <p className="text-gray-400 mb-10">
          Track your projects and keep your GitHub streak alive.
        </p>

        <div className="grid grid-cols-3 gap-5 mb-8">
         <StatsCard title="Active Projects" value={projects.length} />
        <StatsCard title="Project Updates" value={totalUpdates} />
        <StatsCard title="Completed Cycles" value={resetCount} />
        </div>

        <div className="my-8">
          <ContributionGrid
  contributionCount={contributionCount}
  totalUpdates={totalUpdates}
  resetCount={resetCount}
/>
        </div>

        <div className="grid grid-cols-[380px_1fr] gap-6">
          <ProjectForm
            newProject={newProject}
            setNewProject={setNewProject}
            addProject={addProject}
            editingId={editingId}
            cancelEdit={cancelEdit}
          />

          <div className="space-y-4">
            

            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                deleteProject={deleteProject}
                startEditProject={startEditProject}
              />
            ))}

            <div className="mt-8 space-y-4">
             <h2 className="text-xl font-bold text-white">
                Recent Activity
              </h2>

              {activityLogs.length === 0 ? (
  <p className="text-gray-400 text-sm">
    No activity yet. Add or update a project to see logs here.
  </p>
) : (
  activityLogs.map((log) => (
    <DailyLogCard
      key={log.id}
      type={log.type}
      title={log.title}
      date={log.date}
      note={log.note}
    />
  ))
)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard