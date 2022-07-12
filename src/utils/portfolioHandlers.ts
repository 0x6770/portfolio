export const handleExperience = (data) => {
  return data.map(function (x) {
    return {
      "title": x.employer,
      "subtitle": x.role,
      "content": x.responsibilities,
      "start": x.start,
      "end": x.end,
    };
  });
};

export const handleEducation = (data) => {
  return data.map(function (x) {
    return {
      "title": x.institution,
      "subtitle": x.degree,
      "content": x.course,
      "start": x.start,
      "end": x.end,
    };
  });
};

export const handleProjects = (data) => {
  return data.map(function (x) {
    return {
      "title": x.name,
      "subtitle": x.link,
      "content": x.description,
    };
  });
};
