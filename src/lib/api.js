
const FIREBASE_DOMAIN=process.env.REACT_APP_FIREBASE;
const buildDefaultConfig = (domain, resource, config = null) => {
  return {
    url: `${domain}/${resource}`,
    config: config
      ? config
      : {
          headers: {
            "Content-Type": "application/json",
          },
          validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
          },
        },
  };
};
export const getProvinces = async () => {
  const { url, config } = buildDefaultConfig(FIREBASE_DOMAIN, `provinces.json`);
  const response = await fetch(url, config);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }
  return data.data;
};


export const getSubjects = async () => {
  const { url, config } = buildDefaultConfig(FIREBASE_DOMAIN, `subjects.json`);
  const response = await fetch(url, config);
  const data = await response.json();

  return transformData(data);
};

export const postFormData = async (contactData) => {
  const { url, config } = buildDefaultConfig(FIREBASE_DOMAIN, `contact.json`, {
    method: "POST",
    body: JSON.stringify(contactData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await fetch(url, config);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }
  return response;
};

export const getIssues = async () => {
  const { url, config } = buildDefaultConfig(FIREBASE_DOMAIN, "issues.json");
  const response = await fetch(url, config);
  const data = await response.json();

  return transformData(data);
};
export const getIssue = async (id) => {
  const { url, config } = buildDefaultConfig(
    FIREBASE_DOMAIN,
    `issues/${id}.json`
  );
  const response = await fetch(url, config);
  const data = await response.json();
  return data;
};

const transformData = (data) => {
  const transformedData = [];

  for (const key in data) {
    const subjectObj = {
      id: key,
      ...data[key],
    };

    transformedData.push(subjectObj);
  }
  return transformedData;
};
