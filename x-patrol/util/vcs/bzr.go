package vcs

import (
	"x-patrol/logger"

	"bytes"
	"io"
	"os/exec"
	"path/filepath"
	"strings"
)

func init() {
	Register(newBzr, "bzr")
}

func newBzr(b []byte) (Driver, error) {
	return &BzrDriver{}, nil
}

type BzrDriver struct{}

func (g *BzrDriver) HeadRev(dir string) (string, error) {
	cmd := exec.Command(
		"bzr",
		"revno")
	cmd.Dir = dir
	r, err := cmd.StdoutPipe()
	if err != nil {
		return "", err
	}
	defer r.Close()

	if err := cmd.Start(); err != nil {
		return "", err
	}

	var buf bytes.Buffer

	if _, err := io.Copy(&buf, r); err != nil {
		return "", err
	}

	return strings.TrimSpace(buf.String()), cmd.Wait()
}

func (g *BzrDriver) Pull(dir string) (string, error) {
	cmd := exec.Command("bzr", "pull")
	cmd.Dir = dir
	out, err := cmd.CombinedOutput()
	if err != nil {
		logger.Log.Errorf("Failed to bzr pull %s, see output below\n%sContinuing...", dir, out)
		return "", err
	}

	return g.HeadRev(dir)
}

func (g *BzrDriver) Clone(dir, url string) (string, error) {
	par, rep := filepath.Split(dir)
	cmd := exec.Command(
		"bzr",
		"branch",
		url,
		rep)
	cmd.Dir = par
	out, err := cmd.CombinedOutput()
	if err != nil {
		logger.Log.Errorf("Failed to clone %s, see output below\n%sContinuing...", url, out)
		return "", err
	}

	return g.HeadRev(dir)
}

func (g *BzrDriver) SpecialFiles() []string {
	return []string{
		".bzr",
	}
}
