const commonStyle = {
  width: "250px",
  height: "40px",
  border: "2px solid black",
  borderRadius: "8px",
  fontSize: "20px",
  color: "#333",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.3s, border-color 0.3s",
};

export const initialNodes = [
  {
    id: "1",
    sourcePosition: "",
    targetPosition: "",
    data: {
      editable: true,
      type: "input",
      label: "API gateway",
      icon: "aws-api-gateway",
      imageUrl: "https://lordicon.com/icons/wired/outline/1330-rest-api.svg",
    },
    type: "customNode",
    style: {
      backgroundColor: "skyblue",
      borderRadius: "11px",
      borderBottom: "5px solid skyblue",
    },
  },
  {
    id: "2",
    targetPosition: "",
    sourcePosition: "",
    type: "customNode",
    data: {
      editable: true,
      type: "default",
      label: "Lambda",
      icon: "aws-lambda",
      imageUrl:
        "https://static-00.iconduck.com/assets.00/compute-awslambda-lambdafunction-icon-491x512-lj7r3nlo.png",
    },
    style: {
      backgroundColor: "yellow",
      borderRadius: "11px",
      borderBottom: "5px solid yellow",
    },
  },
  {
    id: "3",
    targetPosition: "",
    sourcePosition: "",
    type: "customNode",
    data: {
      editable: true,
      type: "default",
      label: "Server",
      icon: "aws-ec2",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/010/987/711/original/database-server-icon-in-isometric-design-denoting-big-data-vector.jpg",
    },
    style: {
      backgroundColor: "yellow",
      borderRadius: "11px",
      borderBottom: "5px solid yellow",
    },
  },
  {
    id: "4",
    targetPosition: "",
    sourcePosition: "",
    type: "customNode",
    data: {
      editable: true,
      type: "default",
      label: "Data",
      icon: "aws-rds",
      imageUrl: "https://quanexus.com/wp-content/uploads/2018/02/data-icon.png",
    },
    style: {
      backgroundColor: "lime",
      borderRadius: "11px",
      borderBottom: "5px solid lime",
    },
  },
  {
    id: "5",
    targetPosition: "",
    sourcePosition: "",
    data: {
      editable: true,
      type: "output",
      label: "S3",
      icon: "aws-simple-storage-service",
      imageUrl: "https://cloudian.com/wp-content/uploads/2018/06/s3.png",
    },
    type: "customNode",
    style: {
      backgroundColor: "tomato",
      borderRadius: "11px",
      borderBottom: "5px solid tomato",
    },
  },
  {
    id: "6",
    type: "customNode",
    targetPosition: "",
    sourcePosition: "",
    data: {
      editable: true,
      type: "default",
      label: "Queue",
      icon: "aws-auto-scaling",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/235/235183.png",
    },
    style: {
      backgroundColor: "lime",
      borderRadius: "11px",
      borderBottom: "5px solid lime",
    },
  },
  {
    id: "7",
    type: "default",
    targetPosition: "",
    sourcePosition: "",
    data: { editable: true, label: "Compute Nodes" },
    style: {
      backgroundColor: "rgba(0, 0, 0, 0.463)",
      width: 300,
      height: 180,
      border: "2px solid black",
      borderRadius: "10px",
    },
  },
  {
    id: "8",
    targetPosition: "",
    sourcePosition: "",
    data: { editable: true, type: "input", label: "Worker1", icon: "aws-ec2" },
    style: { ...commonStyle },
    parentNode: "7",
    extent: "parent",
  },
  {
    id: "9",
    targetPosition: "",
    sourcePosition: "",
    data: { editable: true, type: "input", label: "Worker2", icon: "aws-ec2" },
    style: { ...commonStyle },
    parentNode: "7",
    extent: "parent",
  },
  {
    id: "10",
    targetPosition: "",
    sourcePosition: "",
    data: { editable: true, type: "input", label: "Worker3", icon: "aws-ec2" },
    style: { ...commonStyle },
    parentNode: "7",
    extent: "parent",
  },
  {
    id: "11",
    type: "customNode",
    targetPosition: "",
    sourcePosition: "",
    data: {
      editable: true,
      type: "output",
      label: "Analytics34",
      icon: "aws-ec2",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/235/235183.png",
    },
    style: {
      backgroundColor: "tomato",
      borderRadius: "11px",
      borderBottom: "5px solid tomato",
    },
  },
];
