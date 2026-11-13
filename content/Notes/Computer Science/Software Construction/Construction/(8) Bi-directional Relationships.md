#cs #cs210 #java

# Implementing bi-directional relationships

For bi-directional classes, ==the relationship must be actively maintained in every participating class, that is a change in one must be reflected in the other:==

![[Pasted image 20260313151306.png|637]]

Generally:
- add(obj) -> check if what you are adding is null || its already been added, then return, otherwise if not null && has not already been added, add the obj and obj.add(this) to update the obj field of this.
- remove(obj) -> check if obj is null || our field doesnt contain obj, otherwise if not null && out field contains obj, field.remove(obj) and obj.remove(this);

Ie -> ==adding a B to the B field of A requires that the current A object be added to that B as the B class also has a field of A==. Similarly, when an A is added to the A field of B, it requires that the current B objected is added to that newly adde A's field of B.

An *important* thing to note is that to implement a bi-directional relationship ==equals and hash code must be overridden.== 

# Lecture Lab
For instance, we can implement the following bi-directional relationship as follows:
![[OfficeTeams.png]]

package model;

// Represents an office having a location and a team assigned
// to meet in that office
public class Office {

```java
public class Office {
    private String location;
    private Team t;

    // EFFECTS: constructs office at location with no team assigned
    public Office(String location) {
        this.location = location;
        this.t = null;
    }

    public String getLocation() {
        return this.location;
    }

    public Team getTeam() {
        return this.t;
    }

    // MODIFIES: this, team
    // EFFECTS: assigns team to this office
    public void assignTeam(Team team) {
        if (this.t == team) {
            return;
        }

        Team oldTeam = this.t; // make current team old team
        this.t = team; // update field with called team

        if (oldTeam != null && oldTeam.getOffice() == this) {
            oldTeam.releaseOffice(); // release if this just switched teams
        }

        if (team != null && team.getOffice() != this) {
            team.assignOffice(this); // make that teams office this
        }
    }

    // MODIFIES: this
    // EFFECTS: removes team from this office
    public void removeTeam() {
        if (this.t == null) {
            return;
        }

        Team oldTeam = this.t;
        this.t = null;

        if (oldTeam.getOffice() == this) {
            oldTeam.releaseOffice(); 
        }
    }
}

```

package model;

// Represents a team having a name and an office at which
// it can meet
public class Team {

```java
public class Team {
    private String name;
    private Office o;

    // EFFECTS: constructs team with given name and no assigned office
    public Team(String name) {
        this.name = name;
        this.o = null;
    }

    public String getName() {
        return this.name;
    }

    public Office getOffice() {
        return this.o;
    }

    // MODIFIES: this, office
    // EFFECTS: assigns office to this team
    public void assignOffice(Office office) {
        if (this.o == office) {
            return;
        }

        Office oldOffice = this.o; // set current office as old 
        this.o = office; // update office with new one

        if (oldOffice != null && oldOffice.getTeam() == this) {
            oldOffice.removeTeam(); // remove this if we updated office
        }

        if (office != null && office.getTeam() != this) {
            office.assignTeam(this); // update the offices team if this has it
        }
    }

    // MODIFIES: this
    // EFFECTS: removes office assignment
    public void releaseOffice() {
        if (this.o == null) {
            return;
        }

        Office oldOffice = this.o;
        this.o = null;

        if (oldOffice.getTeam() == this) {
            oldOffice.removeTeam();
        }
    }
}
```