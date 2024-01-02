package opalinski.jakub.ApiBackendYWebApp.revocation.controller;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.revocation.model.SystemRevocation;
import opalinski.jakub.ApiBackendYWebApp.revocation.service.SystemRevocationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class RevocationController {

    private final SystemRevocationService systemRevocationService;
    @CrossOrigin
    @PostMapping("/public/revocation")
    public ResponseEntity<SystemRevocation> saveRevocation(@RequestBody SystemRevocation systemRevocation) {
        try {
            return ResponseEntity.ok(systemRevocationService.saveRevocation(systemRevocation));
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @CrossOrigin
    @GetMapping("/tokenmang/revocation")
    public ResponseEntity<List<SystemRevocation>> getAllRevocations() {
        try {
            return ResponseEntity.ok(systemRevocationService.getAllRevocations());
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @CrossOrigin
    @DeleteMapping("/tokenmang/revocation/{id}")
    public ResponseEntity<SystemRevocation> deleteRevocation(@PathVariable String id) {
        try {
            return ResponseEntity.ok(systemRevocationService.deleteRevocation(id));
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
