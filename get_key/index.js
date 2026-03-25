<!DOCTYPE html>
<html>
<head>
  <script>
(function () {
  const DEFAULT_KEY = "-dsYICZJAvKVC";

  // Detect current folder (base path)
  const basePath = "/" + window.location.pathname.split("/")[1];

  const params = new URLSearchParams(window.location.search);
  const hasKey = params.has("for");

  const isGetKeyPage = window.location.pathname.endsWith("/get_key") || window.location.pathname.includes("/get_key/");

  // Only redirect if we're NOT already on /get_key with ?for
  if (!isGetKeyPage || !hasKey) {
    const newUrl = basePath + "/get_key/?for=" + DEFAULT_KEY;
    history.replaceState({}, "", newUrl);
  }
})();
</script>
</head>
<body></body>
</html>
