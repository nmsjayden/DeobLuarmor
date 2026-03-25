<!DOCTYPE html>
<html>
<head>
  <script>
(function () {
  const DEFAULT_KEY = "-dsYICZJAvKVC";
  const parts = window.location.pathname.split("/");
  const basePath = "/" + parts[1];
  const params = new URLSearchParams(window.location.search);
  const hasKey = params.has("for");
  const cleanPath = basePath + "/get_key";

  const currentPath = window.location.pathname.replace(/\/$/, "");
  const isGetKeyPage = currentPath.endsWith("/get_key");

  if (!isGetKeyPage || !hasKey) {
    history.replaceState({}, "", cleanPath + "?for=" + DEFAULT_KEY);
  } else {
    // Remove trailing slash if present
    const rawPath = window.location.pathname;
    if (rawPath.endsWith("/")) {
      history.replaceState({}, "", cleanPath + "?" + params.toString());
    }
  }
})();
  </script>
</head>
<body></body>
</html>
