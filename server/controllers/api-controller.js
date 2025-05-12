const axios = require("axios");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const fetchDataFromGithub = async (req, res) => {
  try {
    const response = await axios.get(`https://api.github.com/user/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = response.data.filter(
      (project) => project.id !== 918496445 && project.id !== 860051960
    );

    res.json({
      success: true,
      message: "github api data fetched successfully",
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

module.exports = { fetchDataFromGithub };
