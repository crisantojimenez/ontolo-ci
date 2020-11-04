package es.weso.ontoloci.listener;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.ObjectMapper;
import es.weso.ontoloci.scheduler.Scheduler;
import es.weso.ontoloci.worker.build.Build;
import org.apache.jena.base.Sys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/api/v1/github")
public class GitHubRestListener {

    // LOGGER CREATION
    private static final Logger LOGGER = LoggerFactory.getLogger(GitHubRestListener.class);

    private static final String GITHUB_PUSH_EVENT = "push";
    private static final String GITHUB_PULL_REQUEST_EVENT = "pull_request";
    private static final String REPO_KEY = "repository";
    private static final String OWNER_KEY = "owner";
    private static final String BRANCH_KEY = "branch";

    @RequestMapping(value = "/",method = RequestMethod.POST)
    public void listener(@RequestBody Map<String, Object> payload) {

        // If PUSH
        Map<String, Object> repositoryData = (Map<String, Object>) payload.get("repository");
        Map<String, Object> ownerData = (Map<String, Object>) repositoryData.get("owner");

        final Build build = Build.from();
        // Parse the content and create the test cases array.
        final String owner = (String) ownerData.get("name");
        final String repo = (String) repositoryData.get("name");
        final String branch = "main";
        // Add the metadata.
        Map<String, String> metadata = new HashMap<>();
        metadata.put("owner", owner);
        metadata.put("repo", repo);
        metadata.put("branch", branch);

        // We set the metadata.
        build.setMetadata(metadata);

        // Instantiate the scheduler.
        Scheduler.getInstance().scheduleBuild(build);

        System.out.println("WORKS!");

    }
}
